import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphyTermsComponent } from './graphy-terms.component';

describe('TermsComponent', () => {
  let component: GraphyTermsComponent;
  let fixture: ComponentFixture<GraphyTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphyTermsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphyTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
