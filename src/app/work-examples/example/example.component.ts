import { Component, Input, OnInit } from '@angular/core';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  @Input() exampleData;
  @Input() langData;
  faGithub = faGithub;
  faGooglePlay = faGooglePlay;
  public readonly viewSourceCode = 'View Source Code';
  public readonly playstoreDownload = 'Playstore Download';

  constructor() {}

  ngOnInit(): void {}
}
