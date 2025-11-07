import { Component, Input } from '@angular/core';
import { ProjectData } from 'src/app/shared/models/models';
import { NgClass } from '@angular/common';
import { CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'st-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  imports: [NgClass, CarouselComponent, SlideComponent]
})
export class ExampleComponent {
  @Input() exampleData: ProjectData;

  public readonly viewSourceCode = 'View Source Code';
  public readonly playstoreDownload = 'Playstore Download';
  public readonly websiteLink = 'Website Link';
  public readonly privacyPolicy = 'Privacy Policy Link';
  public readonly userGuide = 'User Guide Link';
}
