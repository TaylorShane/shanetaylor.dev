import { Component, OnInit } from '@angular/core';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { GithubService } from '../config/github.service';
import { Languages, ProjectData } from '../shared/models/models';

// import 'echarts/theme/fresh-cut.js';
// import 'echarts/theme/inspired.js';
// import 'echarts/theme/mint.js';
// import 'echarts/theme/red.js';
// import 'echarts/theme/royal.js';
// import 'echarts/theme/shine.js';
// import 'echarts/theme/dark-blue.js';
import 'echarts/theme/dark-bold.js';
import 'echarts/theme/dark-digerati.js';
import 'echarts/theme/dark-fresh-cut.js';
import 'echarts/theme/dark-mushroom.js';
import 'echarts/lib/theme/dark.js';
@Component({
  selector: 'app-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.scss'],
})
export class WorkExamplesComponent implements OnInit {
  faGithub = faGithub;
  faGooglePlay = faGooglePlay;
  /*eslint-disable */
  public readonly siteBlurb =
    "This website was created with Visual Studio Code using Angular 11 and various third-party libraries such as ngx-bootstrap, ngx-echarts, and fontawesome. I've created a service in this site that gets my repository data from Github and then I use that data to create the below charts. For example, here's a chart that shows the various languages used to create this site and their proportions.";
  public readonly exampleWork = 'Excample Work';
  public readonly slideInterval = 3000;
  public readonly here = 'here';
  public readonly viewProject = 'View Project';
  public readonly viewSourceCode = 'View Source Code';
  public readonly playstoreDownload = 'Playstore Download';
  public readonly personalRepos = 'https://github.com/TaylorShane';
  public readonly githubBlurb =
    'My Github profile with an iOS - Swift app, Oracle SQL Developer database, and other develper example work can be found here.';
  public readonly graphyInfo: ProjectData = new ProjectData(
    [
      'Live in Playstore',
      'Responsive Layout',
      'Responsive design',
      'Compatible With 90+% Android',
      'Randomly generated puzzles',
    ],
    'Graphy is an educational Android App designed for common class-room Chrome tablets that I created during a 10-week internship at Northeastern Illinois University. Selected as the Computer Science expert for a mathematics focused group of students and professors, I worked on a National Science Foundation research grant focusing on Computational Thinking and bringing that thinking to younger students. I solely developed and deployed the educational app Graphy to help pre-service teachers teach the fundamentals of Geometry to middle school students while employing Computational Thinking.',
    [
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145891.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145896.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145900.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145905.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500149162.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500149174.png',
    ],
    'Graphy',
    'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy',
    'https://github.com/TaylorShane/NEIU2017SummerInternship',
    undefined,
    undefined
  );

  public readonly thgInfo: ProjectData = new ProjectData(
    [
      'Twitter API integration to curate haiku',
      'Responsive design',
      'Compatible With 90+% Android',
    ],
    'Trump Haiku Generator creates beautiful and inspirational haiku using words taken directly from the presidents typed and spoken words. Two flavors of haiku are offered. The random button creates a haiku using three random sentences that Donald Trump has spoken. The real displays a haiku that Donald Trump has spoken fully and word for word.',
    [
      '../../assets/img/THG/Screenshot_1510861783.png',
      '../../assets/img/THG/Screenshot_1510861989.png',
      '../../assets/img/THG/Screenshot_1510861997.png',
    ],
    'Trump Haiku Generator',
    'https://play.google.com/store/apps/details?id=com.shane_taylor.trumphaikugenerator&hl=en',
    undefined,
    'https://trumphaikugenerator.com/',
    undefined
  );

  public readonly spottertInfo: ProjectData = new ProjectData(
    [
      'XML database',
      'Event driven programming',
      'Databinding',
      'C# collections',
      'Microsoft .NET framework',
      'Coupling and cohesion best practices',
    ],
    'Spotter is a Windows Presentation Foundation application written in C# and created in Visual Studio. Spotter is a diet and exercise App to help users manage their calorie count, select a workout type, manage their workout schedule, and motivate them to achieve the body type they desire.',
    [
      '../../assets/img/spotter/signin_register.png',
      '../../assets/img/spotter/signin.png',
      '../../assets/img/spotter/registration.png',
      '../../assets/img/spotter/meal_calories_total.png',
      '../../assets/img/spotter/user_profile.png',
    ],
    'Spotter',
    undefined,
    'https://github.com/TaylorShane/Spotter_group',
    undefined,
    undefined
  );

  public readonly brewBuddyInfo: ProjectData = new ProjectData(
    [
      'SQLite Database',
      'Listviews',
      'Adapters',
      'Database Versioning',
      'Cursor Adapters',
    ],
    'Brewbuddy is a mobile application built in both Android and iOS versions. It is designed to help the homebrewer brew great beers. Brewbuddy has a database of popular    recipes, an ABV calculator, and a bottle calculator so that come    bottling day you know exactly how many bottles to sanitize. You can even add your favorite recipes direclty to the home screen for quick access.',
    [
      '../../assets/img/brewbuddy/Screenshot_1507672646.png',
      '../../assets/img/brewbuddy/Screenshot_1507672671.png',
      '../../assets/img/brewbuddy/Screenshot_1507672664.png',
    ],
    'BrewBuddy',
    undefined,
    'https://github.com/TaylorShane/BrewBuddy-Android',
    undefined,
    undefined
  );
  // data = {
  //   android: 'Android',
  //   ios: 'iOS',
  //   repoLinkAndroid: 'https://github.com/TaylorShane/BrewBuddy-Android',
  //   repoLinkiOS: 'https://github.com/TaylorShane/BrewBuddy-iOS',
  // };

  public readonly sweDocInfo: ProjectData = new ProjectData(
    [
      'UML Flow Diagrams',
      'Entity Relation Diagrams',
      'Detailed Input, Output, Actions, Post Conditions, and Validation',
      'Database Versioning',
      'Cursor Adapters',
    ],
    'Trained in the methods of Software Engineering and the life cycle of the software development process, I am Agile and Scrum knowledgeable. I understand the necessity of exceptional communication skills and the importance of working your plan and planning your work.',
    [
      '../../assets/img/pixelhero/add.png',
      '../../assets/img/pixelhero/srs.png',
    ],
    'Software Engineering Documentation',
    undefined,
    undefined,
    undefined,
    [
      'http://www.shane-taylor.com/shane-taylor.com/PixelHeroSRS.html',
      'http://www.shane-taylor.com/shane-taylor.com/PixelHeroADD.html',
    ]
  );

  public readonly mdbmInfo: ProjectData = new ProjectData(
    [
      '3NF Relational Model',
      'Stored Procedures',
      'Functions',
      'Packages',
      'Triggers',
    ],
    'Example complex relational database with Oracle SQL Developer with a script to create the database objects. Which includes the tables and primary/foreign key constraints on those tables, indexes, sequences, views, and PL/SQL stored procedures, functions, packages, and triggers. Also a 3NF relational model, business rules, a data dictionary, ER diagram, and a general description.',
    [
      '../../assets/img/mdbm/mdbm-data-dictionary.png',
      '../../assets/img/mdbm/mdbm-er-diagram.png',
    ],
    'SQL Database',
    undefined,
    'https://github.com/TaylorShane/Modern-Database-Management',
    undefined,
    undefined
  );
  /*eslint-disable */

  shanetaylorLangData: Languages;
  graphyLangData: Languages;
  spotterLangData: Languages;
  brewbuddyAndroindLangData: Languages;
  brewbuddyIosLangData: Languages;
  mdbmLangData: Languages;
  repoNames = [
    'shanetaylor',
    'graphy',
    'Spotter',
    'BrewBuddy-Android',
    'BrewBuddy-iOS',
    'Modern-Database-Management',
  ];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.repoNames.forEach((repoName) => {
      this.getIndividualRepoData(repoName);
    });
  }

  private getIndividualRepoData(repoName: string): void {
    this.githubService.getAllLanguagesForGivenRepo(repoName).subscribe(
      (data) => {
        const repoLangauges = new Languages(repoName, data);
        switch (repoName) {
          case 'shanetaylor':
            this.shanetaylorLangData = repoLangauges;
            break;
          case 'graphy':
            this.graphyLangData = repoLangauges;
            break;
          case 'Spotter':
            this.spotterLangData = repoLangauges;
            break;
          case 'BrewBuddy-Android':
            this.brewbuddyAndroindLangData = repoLangauges;
            break;
          case 'BrewBuddy-iOS':
            this.brewbuddyIosLangData = repoLangauges;
            break;
          case 'Modern-Database-Management':
            this.mdbmLangData = repoLangauges;
            break;

          default:
            break;
        }
      },
      (error) => {
        console.warn('Unable to getAllLanguagesForGivenRepo()' + error);
      }
    );
  }
}
