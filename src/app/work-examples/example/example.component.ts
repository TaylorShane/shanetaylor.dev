import { Component, Input } from '@angular/core';
import { ProjectData } from 'src/app/shared/models/models';

@Component({
  selector: 'st-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  @Input() exampleData: ProjectData;
}
