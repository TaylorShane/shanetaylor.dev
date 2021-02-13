import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphyPrivacyComponent } from './graphy-privacy.component';

describe('GraphyPrivacyComponent', () => {
  let component: GraphyPrivacyComponent;
  let fixture: ComponentFixture<GraphyPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphyPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphyPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
