import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { Languages, ProjectData, RepoData } from '../shared/models/models';
import { catchError, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService implements OnDestroy {
  // gitHub endpoints
  // https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-languages
  // https://api.github.com/orgs/TaylorShane/projects
  /*eslint-disable */
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
  /*eslint-disable */
  shanetaylorLangData: Languages = undefined;
  graphyLangData: Languages = undefined;
  spotterLangData: Languages = undefined;
  brewbuddyAndroidLangData: Languages = undefined;
  brewbuddyIosLangData: Languages = undefined;
  mdbmLangData: Languages = undefined;
  public readonly graphyInfo: ProjectData = {
    id: 'graphy',
    attributes: [
      'Live in Playstore',
      'Responsive Layout',
      'Responsive design',
      'Compatible With 90+% Android',
      'Randomly generated puzzles',
    ],
    blurb:
      'Graphy is an educational Android App designed for common class-room Chrome tablets that I created during a 10-week internship at Northeastern Illinois University. Selected as the Computer Science expert for a mathematics focused group of students and professors, I worked on a National Science Foundation research grant focusing on Computational Thinking and bringing that thinking to younger students. I solely developed and deployed the educational app Graphy to help pre-service teachers teach the fundamentals of Geometry to middle school students while employing Computational Thinking.',
    images: [
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145891.webp',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145896.webp',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145900.webp',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145905.webp',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500149162.webp',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500149174.webp',
    ],
    portrait: false,
    name: 'Graphy',
    languageData: this.graphyLangData,
    playstoreLink:
      'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy',
    repoLink: 'https://github.com/TaylorShane/NEIU2017SummerInternship',
    userGuideLink: '/#/graphy-user-guide',
    privacyLink: '/#/graphy-privacy-terms',
  };

  public readonly thgInfo: ProjectData = {
    attributes: [
      'Twitter API integration to curate haiku',
      'Responsive design',
      'Compatible With 90+% Android',
    ],
    blurb:
      'Trump Haiku Generator creates beautiful and inspirational haiku using words taken directly from the presidents typed and spoken words. Two flavors of haiku are offered. The random button creates a haiku using three random sentences that Donald Trump has spoken. The real displays a haiku that Donald Trump has spoken fully and word for word.',
    images: [
      '../../assets/img/THG/Screenshot_1510861783.webp',
      '../../assets/img/THG/Screenshot_1510861989.webp',
      '../../assets/img/THG/Screenshot_1510861997.webp',
    ],
    portrait: true,
    name: 'Trump Haiku Generator',

    playstoreLink:
      'https://play.google.com/store/apps/details?id=com.shane_taylor.trumphaikugenerator&hl=en',

    websiteLink: 'https://trumphaikugenerator.com/',
    privacyLink: 'https://www.trumphaikugenerator.com/#/privacy-terms',
  };

  public readonly spotterInfo: ProjectData = {
    id: 'Spotter',
    attributes: [
      'XML database',
      'Event driven',
      'Data binding',
      'C# collections',
      '.NET framework',
      'Low coupling',
      'High cohesion',
    ],
    blurb:
      'Spotter is a Windows Presentation Foundation application written in C# and created in Visual Studio. Spotter is a diet and exercise App to help users manage their calorie count, select a workout type, manage their workout schedule, and motivate them to achieve the body type they desire.',
    images: [
      '../../assets/img/spotter/signin_register.webp',
      '../../assets/img/spotter/signin.webp',
      '../../assets/img/spotter/registration.webp',
      '../../assets/img/spotter/meal_calories_total.webp',
      '../../assets/img/spotter/user_profile.webp',
    ],
    portrait: false,
    name: 'Spotter',
    languageData: this.spotterLangData,
    repoLink: 'https://github.com/TaylorShane/Spotter_group',
  };

  public readonly brewBuddyInfo: ProjectData = {
    id: 'BrewBuddy-Android',
    attributes: [
      'SQLite Database',
      'Listviews',
      'Adapters',
      'Database Versioning',
      'Cursor Adapters',
    ],
    blurb:
      'Brewbuddy is a mobile application built in both Android and iOS versions. It is designed to help the home brewer brew great beers. Brewbuddy has a database of popular    recipes, an ABV calculator, and a bottle calculator so that come    bottling day you know exactly how many bottles to sanitize. You can even add your favorite recipes directly to the home screen for quick access.',
    images: [
      '../../assets/img/brewbuddy/Screenshot_1507672646.webp',
      '../../assets/img/brewbuddy/Screenshot_1507672671.webp',
      '../../assets/img/brewbuddy/Screenshot_1507672664.webp',
    ],
    portrait: true,
    name: 'BrewBuddy',
    repoLink: 'https://github.com/TaylorShane/BrewBuddy-Android',
  };

  public readonly sweDocInfo: ProjectData = {
    attributes: [
      'UML Flow Diagrams',
      'Entity Relation Diagrams',
      'Detailed Actions',
      'Post Conditions',
      'Validation',
    ],
    blurb:
      'Trained in the methods of Software Engineering and the life cycle of the software development process, I am Agile and Scrum knowledgeable. I understand the necessity of exceptional communication skills and the importance of working your plan and planning your work.',
    images: [
      '../../assets/img/pixelhero/add.webp',
      '../../assets/img/pixelhero/srs.webp',
    ],
    portrait: true,
    name: 'Software Engineering Documentation',
    docLinks: [
      'http://www.shane-taylor.com/shane-taylor.com/PixelHeroSRS.html',
      'http://www.shane-taylor.com/shane-taylor.com/PixelHeroADD.html',
    ],
  };

  public readonly mdbmInfo: ProjectData = {
    id: 'Modern-Database-Management',
    attributes: [
      '3NF Relational Model',
      'Stored Procedures',
      'Functions',
      'Packages',
      'Triggers',
    ],
    blurb:
      'Example complex relational database with Oracle SQL Developer with a script to create the database objects. Which includes the tables and primary/foreign key constraints on those tables, indexes, sequences, views, and PL/SQL stored procedures, functions, packages, and triggers. Also a 3NF relational model, business rules, a data dictionary, ER diagram, and a general description.',
    images: [
      '../../assets/img/mdbm/mdbm-data-dictionary.webp',
      '../../assets/img/mdbm/mdbm-er-diagram.webp',
    ],
    portrait: false,
    name: 'SQL Database',
    languageData: this.mdbmLangData,
    repoLink: 'https://github.com/TaylorShane/Modern-Database-Management',
  };
  /*eslint-disable */
  private readonly baseUrl = 'https://api.github.com/repos/TaylorShane/';
  private readonly stAllRepos =
    'https://api.github.com/users/TaylorShane/repos';
  private readonly options: any = {
    // headers: { 'User-Agent': 'request' },
    json: true,
  };
  private readonly destroy$ = new Subject<void>();

  projects: ProjectData[] = [
    this.graphyInfo,
    this.thgInfo,
    this.spotterInfo,
    this.brewBuddyInfo,
    this.sweDocInfo,
    this.mdbmInfo,
  ];

  projectData$: Observable<ProjectData[]>;

  constructor(private http: HttpClient) {
    this.projectData$ = new Observable<ProjectData[]>((observer) => {
      this.projects.forEach((project) => {
        if (project.id) {
          return this.getAllLanguagesForGivenRepo(project.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              error: (err) =>
                observer.error(
                  new Error('Failed to get all langs for a given repo')
                ),
              next: (repoLang) => {
                const projectNeedingLangData = this.projects.find(
                  (projectMissingLang) => projectMissingLang.id === project.id
                );
                projectNeedingLangData.languageData = repoLang;
                observer.next(this.projects);
              },
              complete: () => {},
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
  getAllRepos(): Observable<RepoData[]> {
    let allRepoData: RepoData[] = [];
    return new Observable<RepoData[]>((observer) => {
      this.http
        .get(this.stAllRepos, this.options)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          error: (err) => {
            this.handleError(err);
          },
          next: (resp: any) => {
            observer.next(resp);
          },
        });
    });
  }

  getAllLanguagesForGivenRepo(repoName: string): Observable<Languages> {
    let langs: Languages = {
      name: repoName,
      lang: [],
      size: [],
    };
    return new Observable<Languages>((observer) => {
      this.http
        .get(this.baseUrl + repoName + '/languages')
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          error: (err) => observer.error(new Error(err)),
          next: (response) => {
            langs.lang = Object.keys(response);
            langs.size = Object.values(response);
            observer.next(langs);
          },
        });
    });
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(
        'A client-side or network error occurred:',
        error.error.message
      );
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if (error.status === 403) {
        return of(this.backupData);
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
