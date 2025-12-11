import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectData } from 'src/app/shared/models/models';
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  const mockExampleData: ProjectData = {
    attributes: ['foo attribute 1', 'foo attribute 2'],
    blurb: 'foo blurb',
    id: 'foo-id',
    images: ['foo-image.png'],
    name: 'foo name',
    portrait: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('exampleData', mockExampleData);
    fixture.componentRef.setInput('exampleId', 22);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
