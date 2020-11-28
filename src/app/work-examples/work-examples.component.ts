import { Component, OnInit } from '@angular/core';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.sass'],
})
export class WorkExamplesComponent implements OnInit {
  public readonly slideInterval = 3000;
  public readonly here = 'here';
  public readonly viewProject = 'View Project';
  public readonly playstoreDownload = 'Playstore Download';
  public readonly personalRepos = 'https://github.com/TaylorShane';
  public readonly githubBlurb =
    'My Github profile with an iOS - Swift app, Oracle SQL Developer database, and other develper example work can be found here.';
  faGithub = faGithub;
  faGooglePlay = faGooglePlay;

  // filmIcon = faFilm;

  public readonly graphyInfo = {
    graphyPlaystoreLink:
      'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy',
    graphyRepoLink: 'https://github.com/TaylorShane/NEIU2017SummerInternship',
    graphyImages: [
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145891.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145896.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145900.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500145905.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500149162.png',
      '../../assets/img/graphy/ScreenShots/Screenshot_1500149174.png',
    ],
    graphyBlurb:
      'Graphy  an educational Android App designed for common class-room Chrome tablets that I created during a 10-week internship at Northeastern Illinois University. Selected as the Computer Science expert for a mathematics focused group of students and professors, I worked on a National Science Foundation research grant focusing on Computational Thinking and bringing that thinking to younger students. I solely developed and deployed the educational app Graphy to help pre-service teachers teach the fundamentals of Geometry to middle school students while employing Computational Thinking.',
    graphyAttributes: [
      'Live in Playstore',
      'Responsive Layout',
      'Responsive design',
      'Compatible With 90+% Android',
      'Randomly generated puzzles for infinite fun',
    ],
  };

  public readonly thgInfo = {
    thgPlaystoreLink:
      'https://play.google.com/store/apps/details?id=com.shane_taylor.trumphaikugenerator&hl=en',
    thgWebsiteLink: 'http://trumphaikugenerator.com/',
    thgImages: [
      '../../assets/img/THG/Screenshot_1510861783.png',
      '../../assets/img/THG/Screenshot_1510861989.png',
      '../../assets/img/THG/Screenshot_1510861997.png',
    ],
    thgAttributes: [
      'Twitter API integration to curate haiku',
      'Responsive design',
      'Compatible With 90+% Android',
    ],
    thgBlurb:
      'Trump Haiku Generator creates beautiful and inspirational haiku using words taken directly from the presidents typed and spoken words. Two flavors of haiku are offered. The random button creates a haiku using three random sentences that Donald Trump has spoken. The real displays a haiku that Donald Trump has spoken fully and word for word.',
  };

  public readonly spottertInfo = {
    spotterRepoLink: 'https://github.com/TaylorShane/Spotter_group',
    spotterHighlights: 'Spotter Project Highlights',
    spottertImages: [
      '../../assets/img/spotter/signin_register.png',
      '../../assets/img/spotter/signin.png',
      '../../assets/img/spotter/registration.png',
      '../../assets/img/spotter/meal_calories_total.png',
      '../../assets/img/spotter/user_profile.png',
    ],
    spotterAttributes: [
      'XML database',
      'Event driven programming',
      'Databinding',
      'C# collections',
      'Microsoft .NET framework',
      'Coupling and cohesion best practices',
    ],
    spotterBlurb:
      'Spotter is a Windows Presentation Foundation application written in C# and created in Visual Studio. Spotter is a powerful diet and excercise App to help users manage their calorie count, select a workout type, manage their workout schedule, and motivate them to achieve the body type they desire.',
  };

  public readonly brewBuddyInfo = {
    brewBuddyImages: [
      '../../assets/img/brewbuddy/Screenshot_1507672646.png',
      '../../assets/img/brewbuddy/Screenshot_1507672671.png',
      '../../assets/img/brewbuddy/Screenshot_1507672664.png',
    ],
  };
  constructor() {}

  ngOnInit() {
    // nothing here
  }
}
