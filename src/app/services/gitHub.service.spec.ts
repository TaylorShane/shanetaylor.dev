import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { GithubService } from './github.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('githubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
