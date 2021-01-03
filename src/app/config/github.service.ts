import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepoData } from '../shared/models/models';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // gitHub endpoints
  // https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-languages

  private readonly baseUrl = 'https://api.github.com/repos/TaylorShane/';
  private readonly stAllRepos =
    'https://api.github.com/users/TaylorShane/repos';
  public httpCallCount = 0;
  private readonly _getContent = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) {}

  getAllRepos(): Observable<any> {
    return this.http.get<RepoData>(this.stAllRepos);
  }

  getAllLanguagesForGivenRepo(repoName: string): Observable<any> {
    const cacheKey = `${repoName}`;
    if (!this._getContent.get(cacheKey)) {
      this._getContent.set(
        cacheKey,
        this.http
          .get(this.baseUrl + repoName + '/languages')
          .pipe(shareReplay(1))
      );
    }
    return this._getContent.get(cacheKey);
  }
}
