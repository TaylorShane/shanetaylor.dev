import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';

import { WorkExamplesComponent } from './work-examples.component';

describe('WorkExamplesComponent', () => {
  let component: WorkExamplesComponent;
  let fixture: ComponentFixture<WorkExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExamplesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        WorkExamplesComponent,
        { provide: NGX_ECHARTS_CONFIG, useValue: {} },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
