import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject, forkJoin, of, throwError } from 'rxjs';
import { map, catchError, shareReplay, tap } from 'rxjs/operators';
import { Languages, ProjectData, RepoData } from '../shared/models/models';
import { allRepoBackupData, getBackupLangData } from './github-backup-data';
import { brewBuddyInfo, graphyInfo, mdbmInfo, spotterInfo, thgInfo } from './repo-static-data';

interface GitHubLanguageResponse {
  [language: string]: number;
}

interface GitHubRepoResponse {
  description?: string;
  language: string;
  name: string;
  url: string;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly http = inject(HttpClient);

  private readonly config = {
    baseUrl: 'https://api.github.com/repos/TaylorShane/',
    userReposUrl: 'https://api.github.com/users/TaylorShane/repos',
    rateLimitStatus: 403
  };

  private readonly staticProjects: ProjectData[] = [graphyInfo, thgInfo, spotterInfo, brewBuddyInfo, mdbmInfo];

  private readonly projectsSubject = new BehaviorSubject<ProjectData[]>(this.staticProjects);
  public readonly projects$ = this.projectsSubject.asObservable();

  initializeProjectsWithLanguageData(): Observable<ProjectData[]> {
    const projectsWithRepos = this.staticProjects.filter((project: ProjectData) => project.id);

    if (projectsWithRepos.length === 0) {
      return of(this.staticProjects);
    }

    const languageRequests = projectsWithRepos.map((project: ProjectData) =>
      this.getLanguagesForRepo(project.id!).pipe(
        map((languages: Languages) => ({ project, languages })),
        catchError((error) => {
          console.error(`Failed to load languages for ${project.id}:`, error);
          return of({ project, languages: null });
        })
      )
    );

    return forkJoin(languageRequests).pipe(
      map((results: { project: ProjectData; languages: Languages | null }[]) => {
        const updatedProjects = [...this.staticProjects];

        results.forEach(({ project, languages }) => {
          const index = updatedProjects.findIndex((p: ProjectData) => p.id === project.id);
          if (index !== -1 && languages) {
            updatedProjects[index] = { ...updatedProjects[index], languageData: languages };
          }
        });

        return updatedProjects;
      }),
      tap((projects) => this.projectsSubject.next(projects)),
      shareReplay(1)
    );
  }

  getAllRepositories(): Observable<RepoData[]> {
    return this.http.get<GitHubRepoResponse[]>(this.config.userReposUrl).pipe(
      map((repos: GitHubRepoResponse[]) => repos.map((repo) => new RepoData(repo))),
      catchError((error: HttpErrorResponse) => {
        if (error.status === this.config.rateLimitStatus) {
          console.warn('GitHub API rate limit reached, using backup data');
          return of(allRepoBackupData);
        }
        return this.handleError(error);
      }),
      shareReplay(1)
    );
  }

  getLanguagesForRepo(repoName: string): Observable<Languages> {
    const url = `${this.config.baseUrl}${repoName}/languages`;

    return this.http.get<GitHubLanguageResponse>(url).pipe(
      map((response: GitHubLanguageResponse) => ({
        name: repoName,
        lang: Object.keys(response),
        size: Object.values(response)
      })),
      catchError((error: HttpErrorResponse) => {
        if (error.status === this.config.rateLimitStatus) {
          console.warn(`GitHub API rate limit reached for ${repoName}, using backup data`);
          return of(getBackupLangData(repoName));
        }
        return this.handleError(error);
      })
    );
  }

  getCurrentProjects(): ProjectData[] {
    return this.projectsSubject.value;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const message =
      error.status === 0
        ? 'Network error - please check your connection'
        : `GitHub API error (${error.status}): ${error.message}`;

    console.error('GitHub Service Error:', error);
    return throwError(() => new Error(message));
  }
}
