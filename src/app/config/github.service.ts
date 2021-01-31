import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { RepoData } from '../shared/models/models';
import { catchError, shareReplay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // gitHub endpoints
  // https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-languages
  // https://api.github.com/orgs/TaylorShane/projects
  backupData = {
    archive_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/{archive_format}{/ref}',
    archived: false,
    assignees_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/assignees{/user}',
    blobs_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/git/blobs{/sha}',
    branches_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/branches{/branch}',
    clone_url: 'https://github.com/TaylorShane/BrewBuddy-Android.git',
    collaborators_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/collaborators{/collaborator}',
    comments_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/comments{/number}',
    commits_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/commits{/sha}',
    compare_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/compare/{base}...{head}',
    contents_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/contents/{+path}',
    contributors_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/contributors',
    created_at: '2017-05-21T21:58:51Z',
    default_branch: 'master',
    deployments_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/deployments',
    description: 'Android App for home brewing recipes and calculations',
    disabled: false,
    downloads_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/downloads',
    events_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/events',
    fork: false,
    forks: 0,
    forks_count: 0,
    forks_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/forks',
    full_name: 'TaylorShane/BrewBuddy-Android',
    git_commits_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/git/commits{/sha}',
    git_refs_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/git/refs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/git/tags{/sha}',
    git_url: 'git://github.com/TaylorShane/BrewBuddy-Android.git',
    has_downloads: true,
    has_issues: true,
    has_pages: false,
    has_projects: true,
    has_wiki: true,
    homepage: '',
    hooks_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/hooks',
    html_url: 'https://github.com/TaylorShane/BrewBuddy-Android',
    id: 91990149,
    issue_comment_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/issues/comments{/number}',
    issue_events_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/issues/events{/number}',
    issues_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/issues{/number}',
    keys_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/keys{/key_id}',
    labels_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/labels{/name}',
    language: 'Java',
    languages_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/languages',
    license: null,
    merges_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/merges',
    milestones_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/milestones{/number}',
    mirror_url: null,
    name: 'BrewBuddy-Android',
    node_id: 'MDEwOlJlcG9zaXRvcnk5MTk5MDE0OQ==',
    notifications_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/notifications{?since,all,participating}',
    open_issues: 0,
    open_issues_count: 0,
    owner: {
      avatar_url: 'https://avatars0.githubusercontent.com/u/26348898?v=4',
      events_url: 'https://api.github.com/users/TaylorShane/events{/privacy}',
      followers_url: 'https://api.github.com/users/TaylorShane/followers',
      following_url:
        'https://api.github.com/users/TaylorShane/following{/other_user}',
      gists_url: 'https://api.github.com/users/TaylorShane/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/TaylorShane',
      id: 26348898,
      login: 'TaylorShane',
      node_id: 'MDQ6VXNlcjI2MzQ4ODk4',
      organizations_url: 'https://api.github.com/users/TaylorShane/orgs',
      received_events_url:
        'https://api.github.com/users/TaylorShane/received_events',
      repos_url: 'https://api.github.com/users/TaylorShane/repos',
      site_admin: false,
      starred_url:
        'https://api.github.com/users/TaylorShane/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/TaylorShane/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/TaylorShane',
    },
    private: false,
    pulls_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/pulls{/number}',
    pushed_at: '2017-05-21T21:59:30Z',
    releases_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/releases{/id}',
    size: 17960,
    ssh_url: 'git@github.com:TaylorShane/BrewBuddy-Android.git',
    stargazers_count: 0,
    stargazers_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/stargazers',
    statuses_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/statuses/{sha}',
    subscribers_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/subscribers',
    subscription_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/subscription',
    svn_url: 'https://github.com/TaylorShane/BrewBuddy-Android',
    tags_url: 'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/tags',
    teams_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/teams',
    trees_url:
      'https://api.github.com/repos/TaylorShane/BrewBuddy-Android/git/trees{/sha}',
    updated_at: '2020-12-02T00:50:25Z',
    url: 'https://api.github.com/repos/TaylorShane/BrewBuddy-Android',
    watchers: 0,
    watchers_count: 0,
  };
  private readonly baseUrl = 'https://api.github.com/repos/TaylorShane/';
  private readonly stAllRepos =
    'https://api.github.com/users/TaylorShane/repos';
  private readonly getContent = new Map<string, Observable<any>>();
  private readonly options: any = {
    // headers: { 'User-Agent': 'request' },
    json: true,
  };

  constructor(private http: HttpClient) {}

  getAllRepos(): Observable<any> {
    return this.http
      .get<RepoData>(this.stAllRepos, this.options)
      .pipe(catchError(this.handleError));
  }

  getAllLanguagesForGivenRepo(repoName: string): Observable<any> {
    const cacheKey = `${repoName}`;
    if (!this.getContent.get(cacheKey)) {
      this.getContent.set(
        cacheKey,
        this.http
          .get(this.baseUrl + repoName + '/languages')
          .pipe(shareReplay(1), catchError(this.handleError))
      );
    }
    return this.getContent.get(cacheKey);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      // );
      if (error.status === 403) {
        return of(this.backupData);
      }
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
