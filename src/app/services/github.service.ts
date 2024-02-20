import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, forkJoin, map, of, retry, throwError } from 'rxjs';
import { Languages, ProjectData, RepoData } from '../shared/models/models';
import { allRepoBackupData, getBackupLangData } from './github-backup-data';
import { brewBuddyInfo, graphyInfo, mdbmInfo, spotterInfo, thgInfo } from './repo-static-data';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // gitHub endpoints
  // https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-languages
  // https://api.github.com/orgs/TaylorShane/projects

  private readonly baseUrl = 'https://api.github.com/repos/TaylorShane/';
  private readonly stAllRepos = 'https://api.github.com/users/TaylorShane/repos';

  projects: ProjectData[] = [graphyInfo, thgInfo, spotterInfo, brewBuddyInfo, mdbmInfo];

  constructor(private http: HttpClient) {}

  getProjectData(): Observable<ProjectData[]> {
    const observables: Observable<ProjectData>[] = this.projects.map((project) => {
      if (project.id) {
        return this.getAllLanguagesForGivenRepo(project.id).pipe(
          catchError((err) => {
            console.error('Failed to get all langs for a given repo', err);
            return throwError(() => new Error('Failed to fetch repo lang data.'));
          }),
          map((repoLang) => {
            const projectNeedingLangData = this.projects.find(
              (projectMissingLang) => projectMissingLang.id === project.id
            );
            if (projectNeedingLangData) {
              projectNeedingLangData.languageData = repoLang;
            }
            return projectNeedingLangData;
          })
        );
      } else {
        return of(null);
      }
    });

    return forkJoin(observables).pipe(
      map(() =>
        this.projects.filter((project) => {
          return project !== null;
        })
      )
    );
  }

  getDataForAllRepos(): Observable<RepoData[]> {
    return this.http.get<RepoData[]>(this.stAllRepos).pipe(
      retry(2),
      catchError((error) => {
        if (error.status === 403) {
          console.log('Received 403. Retrying...');
          return of(allRepoBackupData);
        } else {
          console.error('An error occurred while fetching repo data:', error);
          return throwError(() => new Error('Failed to fetch repo data.'));
        }
      })
    );
  }

  getAllLanguagesForGivenRepo(repoName: string): Observable<Languages> {
    return this.http.get(this.baseUrl + repoName + '/languages').pipe(
      map((response) => ({
        name: repoName,
        lang: Object.keys(response),
        size: Object.values(response)
      })),
      catchError((error) => {
        if (error.status === 403) {
          return of(getBackupLangData(repoName));
        } else {
          return throwError(() => new Error('Failed to get languages for repo ' + repoName));
        }
      })
    );
  }
}
