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
  private readonly graphyContributors =
    'https://api.github.com/repos/TaylorShane/NEIU2017SummerInternship/stats/contributors';

  private readonly thgMobileTags =
    'https://api.github.com/repos/TaylorShane/THG/tags';
  private readonly thgMobileLanguages =
    'https://api.github.com/repos/TaylorShane/THG/languages';
  private readonly thgMobileContributors =
    'https://api.github.com/repos/TaylorShane/THG/stats/contributors';

  private readonly spotterTags =
    'https://api.github.com/repos/TaylorShane/Spotter_group/tags';
  private readonly spotterLanguages =
    'https://api.github.com/repos/TaylorShane/Spotter_group/languages';
  private readonly spotterContributors =
    'https://api.github.com/repos/TaylorShane/Spotter_group/stats/contributors';

  private readonly mdbmTags =
    'https://api.github.com/repos/TaylorShane/Modern-Database-Management-Project/tags';
  private readonly mdbmLanguages =
    'https://api.github.com/repos/TaylorShane/Modern-Database-Management-Project/languages';
  private readonly mdbmContributors =
    'https://api.github.com/repos/TaylorShane/Modern-Database-Management-Project/stats/contributors';

  private readonly brewBuddyTags =
    'https://api.github.com/repos/TaylorShane/iOS-BrewBuddy-App/tags';
  private readonly brewBuddyLanguages =
    'https://api.github.com/repos/TaylorShane/iOS-BrewBuddy-App/languages';
  private readonly brewBuddyContributors =
    'https://api.github.com/repos/TaylorShane/iOS-BrewBuddy-App/stats/contributors';

  private readonly stAngularTags =
    'https://api.github.com/repos/TaylorShane/shanetaylor/tags';
  private readonly stAngularLanguages =
    'https://api.github.com/repos/TaylorShane/shanetaylor/languages';
  private readonly stAngularContributors =
    'https://api.github.com/repos/TaylorShane/shanetaylor/stats/contributors';

  private readonly stAllRepos =
    'https://api.github.com/users/TaylorShane/repos';
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

  getTHGLangData(): Observable<any> {
    return this.http.get<any>(this.thgMobileLanguages);
  }

  getTHGTags(): Observable<any> {
    return this.http.get<any>(this.thgMobileTags);
  }

  getTHGContributors(): Observable<any> {
    return this.http.get<any>(this.thgMobileContributors);
  }

  getSpotterLangData(): Observable<any> {
    return this.http.get<any>(this.spotterLanguages);
  }

  getSpotterTags(): Observable<any> {
    return this.http.get<any>(this.spotterTags);
  }

  getSpotterContributors(): Observable<any> {
    return this.http.get<any>(this.spotterContributors);
  }

  getMDBMLangData(): Observable<any> {
    return this.http.get<any>(this.mdbmLanguages);
  }

  getMDBMTags(): Observable<any> {
    return this.http.get<any>(this.mdbmTags);
  }

  getMDBMContributors(): Observable<any> {
    return this.http.get<any>(this.mdbmContributors);
  }

  getBrewBuddyLangData(): Observable<any> {
    return this.http.get<any>(this.brewBuddyLanguages);
  }

  getBrewBuddyTags(): Observable<any> {
    return this.http.get<any>(this.brewBuddyTags);
  }

  getBrewBuddyContributors(): Observable<any> {
    return this.http.get<any>(this.brewBuddyContributors);
  }

  getSTangularLangData(): Observable<any> {
    return this.http.get<any>(this.stAngularLanguages);
  }

  getSTangularTags(): Observable<any> {
    return this.http.get<any>(this.stAngularTags);
  }

  getSTangularContributors(): Observable<any> {
    return this.http.get<any>(this.stAngularContributors);
  }

  getAllRepos(): Observable<any> {
    return this.http.get<any>(this.stAllRepos);
  }
}
