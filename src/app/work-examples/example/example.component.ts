import { Component, Input } from '@angular/core';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ProjectData } from 'src/app/shared/models/models';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  @Input() exampleData: ProjectData;

  faGithub = faGithub;
  faGooglePlay = faGooglePlay;
  falink = faLink;
  public readonly viewSourceCode = 'View Source Code';
  public readonly playstoreDownload = 'Playstore Download';
  public readonly websiteLink = 'Website Link';

  constructor() {}
}
