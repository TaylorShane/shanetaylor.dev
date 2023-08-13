import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, takeUntil, throwError } from 'rxjs';
import { Languages, ProjectData, RepoData } from '../shared/models/models';
import { allRepoBackupData, getBackupLangData } from './github-backup-data';
import { brewBuddyInfo, graphyInfo, mdbmInfo, spotterInfo, sweDocInfo, thgInfo } from './repo-static-data';

@Injectable({
  providedIn: 'root'
})
export class GithubService implements OnDestroy {
  // gitHub endpoints
  // https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-languages
  // https://api.github.com/orgs/TaylorShane/projects

  private readonly baseUrl = 'https://api.github.com/repos/TaylorShane/';
  private readonly stAllRepos = 'https://api.github.com/users/TaylorShane/repos';
  private readonly options: any = {
    // headers: { 'User-Agent': 'request' },
    json: true
  };
  private readonly destroy$ = new Subject<void>();

  projects: ProjectData[] = [graphyInfo, thgInfo, spotterInfo, brewBuddyInfo, sweDocInfo, mdbmInfo];

  projectData$: Observable<ProjectData[]>;

  constructor(private http: HttpClient) {
    this.projectData$ = new Observable<ProjectData[]>((observer) => {
      this.projects.forEach((project) => {
        if (project.id) {
          return this.getAllLanguagesForGivenRepo(project.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              error: (err) => observer.error(new Error('Failed to get all langs for a given repo')),
              next: (repoLang) => {
                const projectNeedingLangData = this.projects.find(
                  (projectMissingLang) => projectMissingLang.id === project.id
                );
                projectNeedingLangData.languageData = repoLang;
                observer.next(this.projects);
              },
              complete: () => {}
            });
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // TODO: refactor
  getDataForAllRepos(): Observable<RepoData[]> {
    return new Observable<RepoData[]>((observer) => {
      this.http
        .get(this.stAllRepos, this.options)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          error: (err) => {
            if (err.status === 403) {
              observer.next(allRepoBackupData);
            } else {
              this.handleError(err);
            }
          },
          next: (resp: any) => {
            observer.next(resp);
          }
        });
    });
  }

  getAllLanguagesForGivenRepo(repoName: string): Observable<Languages> {
    let langs: Languages = {
      name: repoName,
      lang: [],
      size: []
    };
    return new Observable<Languages>((observer) => {
      this.http
        .get(this.baseUrl + repoName + '/languages')
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          error: (err) => {
            if (err.status === 403) {
              observer.next(getBackupLangData(repoName));
            } else {
              observer.error(new Error(err));
            }
          },
          next: (response) => {
            langs.lang = Object.keys(response);
            langs.size = Object.values(response);
            observer.next(langs);
          }
        });
    });
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
