import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { allRepoBackupData, getBackupLangData } from './github-backup-data';
import { GithubService } from './github.service';

describe('githubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [GithubService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getAllRepositories', () => {
    it('should fetch and transform repository data', () => {
      const mockRepos = [
        { name: 'test-repo', description: 'Test', language: 'TypeScript', url: 'test-url', size: 100 }
      ];

      service.getAllRepositories().subscribe((repos) => {
        expect(repos.length).toBe(1);
        expect(repos[0].name).toBe('test-repo');
      });

      const req = httpMock.expectOne('https://api.github.com/users/TaylorShane/repos');
      expect(req.request.method).toBe('GET');
      req.flush(mockRepos);
    });

    it('should handle rate limit with backup data', () => {
      service.getAllRepositories().subscribe((repos) => {
        expect(repos).toEqual(allRepoBackupData);
      });

      const req = httpMock.expectOne('https://api.github.com/users/TaylorShane/repos');
      req.flush({}, { status: 403, statusText: 'Forbidden' });
    });

    it('should handle other HTTP errors', () => {
      service.getAllRepositories().subscribe({
        next: () => fail('Should have failed'),
        error: (error) => {
          expect(error.message).toContain('GitHub API error');
        }
      });

      const req = httpMock.expectOne('https://api.github.com/users/TaylorShane/repos');
      req.flush({}, { status: 500, statusText: 'Server Error' });
    });
  });

  describe('getLanguagesForRepo', () => {
    it('should fetch and transform language data', () => {
      const mockLanguages = { TypeScript: 1000, JavaScript: 500 };
      const repoName = 'test-repo';

      service.getLanguagesForRepo(repoName).subscribe((languages) => {
        expect(languages.name).toBe(repoName);
        expect(languages.lang).toEqual(['TypeScript', 'JavaScript']);
        expect(languages.size).toEqual([1000, 500]);
      });

      const req = httpMock.expectOne(`https://api.github.com/repos/TaylorShane/${repoName}/languages`);
      req.flush(mockLanguages);
    });

    it('should handle rate limit with backup data', () => {
      const repoName = 'test-repo';

      service.getLanguagesForRepo(repoName).subscribe((languages) => {
        expect(languages).toEqual(getBackupLangData(repoName));
      });

      const req = httpMock.expectOne(`https://api.github.com/repos/TaylorShane/${repoName}/languages`);
      req.flush({}, { status: 403, statusText: 'Forbidden' });
    });
  });

  describe('initializeProjectsWithLanguageData', () => {
    it('should initialize projects with language data', () => {
      const mockLanguages = { TypeScript: 1000 };

      service.initializeProjectsWithLanguageData().subscribe((projects) => {
        const projectsWithLangData = projects.filter((p) => p.languageData);
        expect(projectsWithLangData.length).toBeGreaterThan(0);
      });

      const requests = httpMock.match((req) => req.url.includes('/languages'));
      requests.forEach((req) => req.flush(mockLanguages));
    });

    it('should handle API failures gracefully', () => {
      service.initializeProjectsWithLanguageData().subscribe((projects) => {
        expect(projects).toBeDefined();
        expect(projects.length).toBeGreaterThan(0);
      });

      const requests = httpMock.match((req) => req.url.includes('/languages'));
      requests.forEach((req) => req.flush({}, { status: 500, statusText: 'Server Error' }));
    });
  });
});
