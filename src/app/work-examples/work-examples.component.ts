import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.css'],
})
export class WorkExamplesComponent implements OnInit {
  public readonly personalRepos = 'https://github.com/TaylorShane';
  public readonly graphyLink =
    'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy';
  public readonly thgPlaystoreLink =
    'https://play.google.com/store/apps/details?id=com.shane_taylor.trumphaikugenerator&hl=en';
  public readonly thgWebsiteLink = 'http://trumphaikugenerator.com/';

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public readonly graphyImages = [
    '../../assets/img/graphy/ScreenShots/Screenshot_1500145891.png',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500145896.png',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500145900.png',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500145905.png',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500149162.png',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500149174.png',
  ];

  public thgImages = [
    '../../assets/img/THG/Screenshot_1510861783.png',
    '../../assets/img/THG/Screenshot_1510861989.png',
    '../../assets/img/THG/Screenshot_1510861997.png',
  ];

  public readonly brewBuddyImages = [
    '../../assets/img/brewbuddy/Screenshot_1507672646.png',
    '../../assets/img/brewbuddy/Screenshot_1507672671.png',
    '../../assets/img/brewbuddy/Screenshot_1507672664.png',
  ];

  public readonly spottertImages = [
    '../../assets/img/spotter/signin_register.png',
    '../../assets/img/spotter/signin.png',
    '../../assets/img/spotter/registration.png',
    '../../assets/img/spotter/meal_calories_total.png',
    '../../assets/img/spotter/user_profile.png',
  ];

  public readonly slideInterval = 3000;

  constructor() {}

  ngOnInit() {
    console.info(this.graphyImages);
  }
}
