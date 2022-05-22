import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.exampleData = {
      attributes: ['foo attribute'],
      blurb: 'foo blurb',
      images: ['foo-location'],
      portrait: false,
      name: 'foo name',
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
