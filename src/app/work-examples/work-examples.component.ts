import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../services/github.service';
import { ProjectData } from '../shared/models/models';
import { ChartsComponent } from '../shared/charts/charts.component';
import { AsyncPipe } from '@angular/common';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'st-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.scss'],
  imports: [ChartsComponent, ExampleComponent, AsyncPipe]
})
export class WorkExamplesComponent {
  private githubService = inject(GithubService);

  /*eslint-disable */
  public readonly siteBlurb =
    "This website was created with Visual Studio Code using Angular 11 and various third-party libraries such as ngx-bootstrap, ngx-echarts, and fontawesome. I've created a service in this site that gets my repository data from Github and then I use that data to create the below charts. For example, here's a chart that shows the various languages used to create this site and their proportions.";
  public readonly exampleWork = 'Example Work';
  public readonly slideInterval = 3000;
  public readonly here = 'here';
  public readonly viewProject = 'View Project';
  public readonly viewSourceCode = 'View Source Code';
  public readonly playstoreDownload = 'Playstore Download';
  public readonly personalRepos = 'https://github.com/TaylorShane';
  public readonly githubBlurb =
    'My Github profile with an iOS - Swift app, Oracle SQL Developer database, and other developer example work can be found here.';
  /*eslint-disable */
  projects$: Observable<ProjectData[]>;

  constructor() {
    this.projects$ = this.githubService.projectData$;
  }
}
