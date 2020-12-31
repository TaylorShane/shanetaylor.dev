import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map, concatMap } from 'rxjs/operators';
import { RepoData } from '../shared/models/models';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // gitHub endpoints
  // https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-languages

  private readonly baseUrl = 'https://api.github.com/repos/TaylorShane/';
  private readonly stAllRepos =
    'https://api.github.com/users/TaylorShane/repos';
  constructor(private http: HttpClient) {}

  getAllLanguagesForGivenRepo(repo: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + repo + '/languages');
  }

  getAllRepos(): Observable<any> {
    return this.http.get<RepoData>(this.stAllRepos);
  }

  getAllRepos2(): Observable<any> {
    return this.http.get<any>(this.stAllRepos);
  }
}
