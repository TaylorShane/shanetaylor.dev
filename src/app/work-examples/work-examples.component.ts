import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../services/github.service';
import { ProjectData } from '../shared/models/models';

@Component({
  selector: 'st-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.scss']
})
export class WorkExamplesComponent {
  /*eslint-disable */
  public readonly siteBlurb =
    "This web app runs on the latest version of Angular and various third-party libraries. I've created a service that retrieves data from Github about my repositories and then feed that data into the charts below. For example, here's a chart that shows the various languages used to create this website.";
  public readonly githubBlurb = "Here's a graph that represents the various repositories in my Github profile.";
  /*eslint-enable */
  projects$: Observable<ProjectData[]>;

  constructor(private githubService: GithubService) {
    this.projects$ = this.githubService.projectData$;
  }
}
