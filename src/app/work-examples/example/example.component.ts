import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProjectData } from 'src/app/shared/models/models';

@Component({
  selector: 'st-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  imports: [NgClass]
})
export class ExampleComponent {
  exampleData = input<ProjectData>();
  exampleId = input<number>();

  public readonly viewSourceCode = 'View source code';
  public readonly playStoreDownload = 'Play store download';
  public readonly websiteLink = 'Website link';
  public readonly privacyPolicy = 'Privacy policy link';
  public readonly userGuide = 'User guide link';
}
