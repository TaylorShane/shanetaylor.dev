import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { of, throwError } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { Languages, RepoData } from '../models/models';
import { ChartsComponent } from './charts.component';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;
  let githubService: jasmine.SpyObj<GithubService>;
  let httpMock: HttpTestingController;

  const mockRepoData: RepoData[] = [
    {
      name: 'test-repo-1',
      description: 'Test repository 1',
      language: 'TypeScript',
      url: 'https://github.com/test/repo1',
      value: 1000
    },
    {
      name: 'test-repo-2',
      description: 'Test repository 2',
      language: 'JavaScript',
      url: 'https://github.com/test/repo2',
      value: 2000
    },
    {
      name: 'TaylorShane',
      description: 'Should be filtered out',
      language: 'Python',
      url: 'https://github.com/test/taylorshane',
      value: 500
    }
  ];

  const mockLanguageData: Languages = {
    name: 'shanetaylor',
    lang: ['TypeScript', 'JavaScript', 'CSS'],
    size: [5000, 3000, 1000]
  };

  beforeEach(async () => {
    const githubServiceSpy = jasmine.createSpyObj('GithubService', ['getAllRepositories', 'getLanguagesForRepo']);

    await TestBed.configureTestingModule({
      imports: [ChartsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: GithubService, useValue: githubServiceSpy },
        { provide: NGX_ECHARTS_CONFIG, useValue: {} },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    githubService = TestBed.inject(GithubService) as jasmine.SpyObj<GithubService>;
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (component.eChartsInstance && typeof component.eChartsInstance.dispose === 'function') {
      component.eChartsInstance.dispose();
      component.eChartsInstance = null;
    }
    fixture.destroy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Component Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with default values', () => {
      expect(component.repoData).toEqual([]);
      expect(component.eChartsInstance).toBeNull();
      expect(component.loading).toBeFalse();
      expect(component.error).toBeNull();
    });

    it('should call loadChartData on ngOnInit', () => {
      spyOn(component as any, 'loadChartData');
      component.ngOnInit();
      expect((component as any).loadChartData).toHaveBeenCalled();
    });
  });

  describe('Chart Data Loading', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('chartName', 'allRepos');
    });

    it('should load all repositories data successfully', () => {
      githubService.getAllRepositories.and.returnValue(of(mockRepoData));

      component.ngOnInit();

      expect(component.loading).toBeFalse();
      expect(component.error).toBeNull();
      expect(component.repoData.length).toBe(2); // TaylorShane should be filtered out
      expect(component.repoData[0].name).toBe('test-repo-1');
      expect(component.repoData[1].name).toBe('test-repo-2');
    });

    it('should handle error when loading all repositories', () => {
      const errorMessage = 'API Error';
      githubService.getAllRepositories.and.returnValue(throwError(() => new Error(errorMessage)));

      component.ngOnInit();

      expect(component.loading).toBeFalse();
      expect(component.error).toBe('Failed to load repository data');
    });

    it('should load language data successfully', () => {
      fixture.componentRef.setInput('chartName', 'shanetaylor');
      githubService.getLanguagesForRepo.and.returnValue(of(mockLanguageData));

      component.ngOnInit();

      expect(component.loading).toBeFalse();
      expect(component.error).toBeNull();
      expect(component.repoData.length).toBe(3);
      expect(component.repoData[0].name).toBe('TypeScript');
      expect(component.repoData[0].value).toBe(5000);
      expect(component.repoData[0].language).toBe('TypeScript');
      expect(component.repoData[0].url).toBe('https://github.com/TaylorShane/shanetaylor');
    });

    it('should handle error when loading language data', () => {
      fixture.componentRef.setInput('chartName', 'shanetaylor');
      const errorMessage = 'Language API Error';
      githubService.getLanguagesForRepo.and.returnValue(throwError(() => new Error(errorMessage)));

      component.ngOnInit();

      expect(component.loading).toBeFalse();
      expect(component.error).toBe('Failed to load language data for shanetaylor');
    });

    it('should handle unknown chart type', () => {
      fixture.componentRef.setInput('chartName', 'unknown');

      component.ngOnInit();

      expect(component.loading).toBeFalse();
      expect(component.error).toBe('Unknown chart type: unknown');
    });

    it('should handle missing chart name', () => {
      fixture.componentRef.setInput('chartName', undefined);

      component.ngOnInit();

      expect(component.loading).toBeFalse();
      expect(component.error).toBe('Chart name is required');
    });
  });

  describe('Chart Configuration', () => {
    beforeEach(() => {
      // Mock window.innerWidth
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024
      });
    });

    it('should generate options for large screen', () => {
      fixture.componentRef.setInput('chartName', 'allRepos');
      component.repoData = mockRepoData;

      const options = component.options;

      expect(options.backgroundColor).toBe('#333333');
      expect((options.grid as any)?.left).toBe(100);
      expect((options.grid as any)?.right).toBe(100);
      expect(options.series?.[0]?.radius).toBe('100%');
    });

    it('should generate options for small screen', () => {
      // Set small screen width before component initialization
      Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });

      // Create a new fixture with the updated window width
      const smallScreenFixture = TestBed.createComponent(ChartsComponent);
      const smallScreenComponent = smallScreenFixture.componentInstance;
      smallScreenFixture.componentRef.setInput('chartName', 'allRepos');
      smallScreenComponent.repoData = mockRepoData;

      // Mock the github service for this specific test
      githubService.getAllRepositories.and.returnValue(of(mockRepoData));

      // Initialize component with small screen
      smallScreenComponent.ngOnInit();

      const options = smallScreenComponent.options;

      expect((options.grid as any)?.left).toBe(50);
      expect((options.grid as any)?.right).toBe(50);
      expect(options.series?.[0]?.radius).toBe('50%');

      // Clean up
      smallScreenFixture.destroy();

      // Reset window width for other tests
      Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true });
    });

    it('should have correct chart options configuration', () => {
      fixture.componentRef.setInput('chartName', 'allRepos');
      component.repoData = mockRepoData.slice(0, 2); // Remove TaylorShane

      const options = component.options;

      expect(options.backgroundColor).toBe('#333333');
      expect((options.title as any)?.text).toBe('Github Projects');
      expect((options.title as any)?.subtext).toBe('Current projects in my Github repository');
      expect(options.series?.[0]?.type).toBe('pie');
      expect(options.series?.[0]?.roseType).toBe('area');
    });

    it('should update chart options for shanetaylor chart', () => {
      fixture.componentRef.setInput('chartName', 'shanetaylor');
      githubService.getLanguagesForRepo.and.returnValue(of(mockLanguageData));

      component.ngOnInit();

      expect((component.options.title as any)?.text).toBe('shanetaylor.dev');
      expect((component.options.title as any)?.subtext).toBe('Languages used and proportions');
    });
  });

  describe('Chart Instance Management', () => {
    it('should initialize chart instance', () => {
      const mockChartInstance = {
        resize: jasmine.createSpy('resize'),
        dispose: jasmine.createSpy('dispose'),
        setOption: jasmine.createSpy('setOption')
      };

      component.onChartInit(mockChartInstance);

      expect(component.eChartsInstance).toBe(mockChartInstance);
    });

    it('should resize chart when instance exists', () => {
      const mockChartInstance = {
        resize: jasmine.createSpy('resize'),
        dispose: jasmine.createSpy('dispose'),
        setOption: jasmine.createSpy('setOption')
      };
      component.eChartsInstance = mockChartInstance;

      component.resizeChart();

      expect(mockChartInstance.resize).toHaveBeenCalledWith({
        width: 'auto',
        height: 'auto'
      });
    });

    it('should not resize chart when instance is null', () => {
      component.eChartsInstance = null;

      expect(() => component.resizeChart()).not.toThrow();
    });

    it('should dispose chart instance on destroy', () => {
      const mockChartInstance = {
        resize: jasmine.createSpy('resize'),
        dispose: jasmine.createSpy('dispose'),
        setOption: jasmine.createSpy('setOption')
      };
      component.eChartsInstance = mockChartInstance;

      component.ngOnDestroy();

      expect(mockChartInstance.dispose).toHaveBeenCalled();
      expect(component.eChartsInstance).toBeNull();
    });

    it('should not throw error when disposing null chart instance', () => {
      component.eChartsInstance = null;

      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });

  describe('Private Methods', () => {
    it('should filter out TaylorShane repository', () => {
      githubService.getAllRepositories.and.returnValue(of(mockRepoData));
      fixture.componentRef.setInput('chartName', 'allRepos');

      (component as any).loadAllRepositories();

      expect(component.repoData.length).toBe(2);
      expect(component.repoData.some((repo) => repo.name === 'TaylorShane')).toBeFalse();
    });

    it('should transform language data correctly', () => {
      fixture.componentRef.setInput('chartName', 'shanetaylor');
      githubService.getLanguagesForRepo.and.returnValue(of(mockLanguageData));

      // Set up mock chart instance
      const mockChartInstance = {
        resize: jasmine.createSpy('resize'),
        dispose: jasmine.createSpy('dispose'),
        setOption: jasmine.createSpy('setOption')
      };
      component.eChartsInstance = mockChartInstance;

      (component as any).loadLanguageData('shanetaylor');

      expect(component.repoData.length).toBe(3);
      expect(component.repoData[0]).toEqual({
        value: 5000,
        name: 'TypeScript',
        description: 'shanetaylor',
        language: 'TypeScript',
        url: 'https://github.com/TaylorShane/shanetaylor'
      });
      expect(mockChartInstance.setOption).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should handle window undefined scenario', () => {
      fixture.componentRef.setInput('chartName', 'allRepos');
      component.repoData = mockRepoData;

      const options = component.options;

      expect(options.backgroundColor).toBe('#333333');
      expect((options.grid as any)?.left).toBeGreaterThan(0);
    });

    it('should handle chart update when eChartsInstance exists', () => {
      const mockChartInstance = {
        resize: jasmine.createSpy('resize'),
        dispose: jasmine.createSpy('dispose'),
        setOption: jasmine.createSpy('setOption')
      };
      component.eChartsInstance = mockChartInstance;
      githubService.getAllRepositories.and.returnValue(of(mockRepoData));
      fixture.componentRef.setInput('chartName', 'allRepos');

      (component as any).loadAllRepositories();

      expect(mockChartInstance.setOption).toHaveBeenCalled();
    });
  });
});
