import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

  getAllLanguages(repo: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + repo + 'languages');
  }

  getAllRepos(): Observable<any> {
    return this.http.get<any>(this.stAllRepos);
  }

  getRepoLanguages(repo: string): Observable<any> {
    return this.http.get<any>(
      'https://api.github.com/repos/TaylorShane/' + repo + '/languages'
    );
  }
}
