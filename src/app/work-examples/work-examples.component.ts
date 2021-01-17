import { Component, OnInit } from '@angular/core';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { GithubService } from '../config/github.service';
import { RepoData } from '../shared/models/models';
@Component({
  selector: 'app-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.scss'],
})
export class WorkExamplesComponent implements OnInit {
  faGithub = faGithub;
  faGooglePlay = faGooglePlay;
  public readonly siteBlurb =
    "This website was created with Visual Studio Code using Angular 11 and various third party libraries such as ngx-bootstrap, ngx-echarts, and fontawesome. I've created a service in this site that gets my repository data from Github and then I use that data to create the below charts. For   example, here's a chart that shows the various languages used to create this site and their porportions.";
  public readonly exampleWork = 'Excample Work';
  public readonly slideInterval = 3000;
  public readonly here = 'here';
  public readonly viewProject = 'View Project';
  public readonly viewSourceCode = 'View Source Code';
  public readonly playstoreDownload = 'Playstore Download';
  public readonly personalRepos = 'https://github.com/TaylorShane';
  public readonly githubBlurb =
    'My Github profile with an iOS - Swift app, Oracle SQL Developer database, and other develper example work can be found here.';
  public readonly graphyInfo = {
    name: 'Graphy',
    playstoreLink:
      'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy',
    repoLink: 'https://github.com/TaylorShane/NEIU2017SummerInternship',
    images: [
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145891.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145896.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145900.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145905.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500149162.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500149174.png',
    ],
    blurb:
      'Graphy  an educational Android App designed for common class-room Chrome tablets that I created during a 10-week internship at Northeastern Illinois University. Selected as the Computer Science expert for a mathematics focused group of students and professors, I worked on a National Science Foundation research grant focusing on Computational Thinking and bringing that thinking to younger students. I solely developed and deployed the educational app Graphy to help pre-service teachers teach the fundamentals of Geometry to middle school students while employing Computational Thinking.',
    attributes: [
      'Live in Playstore',
      'Responsive Layout',
      'Responsive design',
      'Compatible With 90+% Android',
      'Randomly generated puzzles for infinite fun',
    ],
  };

  public readonly thgInfo = {
    name: 'Trump Haiku Generator',
    playstoreLink:
      'https://play.google.com/store/apps/details?id=com.shane_taylor.trumphaikugenerator&hl=en',
    websiteLink: 'https://trumphaikugenerator.com/',
    websiteLinkText: 'THG website',
    images: [
      '../../assets/img/THG/Screenshot_1510861783.png',
      '../../assets/img/THG/Screenshot_1510861989.png',
      '../../assets/img/THG/Screenshot_1510861997.png',
    ],
    attributes: [
      'Twitter API integration to curate haiku',
      'Responsive design',
      'Compatible With 90+% Android',
    ],
    blurb:
      'Trump Haiku Generator creates beautiful and inspirational haiku using words taken directly from the presidents typed and spoken words. Two flavors of haiku are offered. The random button creates a haiku using three random sentences that Donald Trump has spoken. The real displays a haiku that Donald Trump has spoken fully and word for word.',
  };

  public readonly spottertInfo = {
    name: 'Spotter',
    repoLink: 'https://github.com/TaylorShane/Spotter_group',

    images: [
      '../../assets/img/spotter/signin_register.png',
      '../../assets/img/spotter/signin.png',
      '../../assets/img/spotter/registration.png',
      '../../assets/img/spotter/meal_calories_total.png',
      '../../assets/img/spotter/user_profile.png',
    ],
    attributes: [
      'XML database',
      'Event driven programming',
      'Databinding',
      'C# collections',
      'Microsoft .NET framework',
      'Coupling and cohesion best practices',
    ],
    blurb:
      'Spotter is a Windows Presentation Foundation application written in C# and created in Visual Studio. Spotter is a diet and exercise App to help users manage their calorie count, select a workout type, manage their workout schedule, and motivate them to achieve the body type they desire.',
  };

  public readonly brewBuddyInfo = {
    name: 'BrewBuddy',
    repoLinkAndroid: 'https://github.com/TaylorShane/BrewBuddy-Android',
    repoLinkiOS: 'https://github.com/TaylorShane/BrewBuddy-iOS',
    images: [
      '../../assets/img/brewbuddy/Screenshot_1507672646.png',
      '../../assets/img/brewbuddy/Screenshot_1507672671.png',
      '../../assets/img/brewbuddy/Screenshot_1507672664.png',
    ],
    attributes: [
      'SQLite Database',
      'Listviews',
      'Adapters',
      'Database Versioning',
      'Cursor Adapters',
    ],
    blurb:
      'Brewbuddy is a mobile application built in both Android and iOS versions. It is designed to help the homebrewer brew great beers. Brewbuddy has a database of popular    recipes, an ABV calculator, and a bottle calculator so that come    bottling day you know exactly how many bottles to sanitize. You can even add your favorite recipes direclty to the home screen for quick access.',
  };

  public readonly sweDocInfo = {
    name: 'Software Engineering Documentation',
    srsLink: 'http://www.shane-taylor.com/shane-taylor.com/PixelHeroSRS.html',
    addLink: 'http://www.shane-taylor.com/shane-taylor.com/PixelHeroADD.html',
    images: [
      '../../assets/img/pixelhero/add.png',
      '../../assets/img/pixelhero/srs.png',
    ],
    attributes: [
      'UML flow diagrams',
      'Entity Relation Diagrams',
      'Detailed Input, Output, Actions, Post Conditions, and Validation',
      'Database Versioning',
      'Cursor Adapters',
    ],
    blurb:
      'Trained in the methods of Software Engineering and the life cycle of the software development process, I am Agile and Scrum knowledgeable. I understand the necessity of exceptional communication skills and the importance of working your plan and planning your work.',
    viewSRS: 'Software Requirements and Specifications',
    viewADD: 'Analysis and Design Document',
  };

  repoData: RepoData[] = [];
  repoNames = [
    'shanetaylor',
    'graphy',
    'Spotter',
    'BrewBuddy-Android',
    'BrewBuddy-iOS',
  ];

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.repoNames.forEach((repoName) => {
      this.getIndividualRepoData(repoName);
    });
  }

  private getIndividualRepoData(repoName: string) {
    this.githubService
      .getAllLanguagesForGivenRepo(repoName)
      .subscribe((data) => {
        const keys = Object.keys(data);
        let values = Object.values(data) as number[];

        for (let index = 0; index < keys.length; index++) {
          this.repoData[index] = {
            value: values[index],
            name: keys[index],
            description: repoName,
            language: keys[values.indexOf(Math.max(...values))],
            url: 'https://github.com/TaylorShane/' + repoName,
          };
        }
      });
  }
}
