import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsComponent } from './charts.component';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ChartsComponent, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    spyOn(component, 'getAllReposData');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('when loading the all repo data chart', () => {
  //   beforeEach(() => {
  //     spyOn(component, 'getChartData').and.callThrough();

  //     component.chartName = 'allRepos';
  //     fixture.detectChanges();
  //   });

  //   it('should call the service for all repo data', () => {
  //     expect(component.getAllReposData).toHaveBeenCalled();
  //   });
  // });
});
