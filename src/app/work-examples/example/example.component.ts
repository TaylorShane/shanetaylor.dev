import { Component, Input, OnInit } from '@angular/core';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { Languages, ProjectData } from 'src/app/shared/models/models';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  @Input() exampleData;
  @Input() langData;
  // TODO: fix this to work more dynamically with multiple values
  // @Input() set langData(value: any) {
  //   this.languages = value?.lang || [];
  // }
  faGithub = faGithub;
  faGooglePlay = faGooglePlay;
  public readonly viewSourceCode = 'View Source Code';
  public readonly playstoreDownload = 'Playstore Download';
  // public languages: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
