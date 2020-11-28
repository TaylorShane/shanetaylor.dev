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

  private readonly graphyTags =
    'https://api.github.com/repos/TaylorShane/NEIU2017SummerInternship/tags';
  private readonly graphyLanguages =
    'https://api.github.com/repos/TaylorShane/NEIU2017SummerInternship/languages';

  // Get all contributor commit activity
  private readonly graphyContributors =
    'https://api.github.com/repos/TaylorShane/NEIU2017SummerInternship/stats/contributors';

  constructor(private http: HttpClient) {}

  getGraphyLangData(): Observable<any> {
    return this.http.get<any>(this.graphyLanguages);
  }

  getGraphyTags(): Observable<any> {
    return this.http.get<any>(this.graphyTags);
  }

  getGraphyContributors(): Observable<any> {
    return this.http.get<any>(this.graphyContributors);
  }
}
