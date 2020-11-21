import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.css'],
})
export class WorkExamplesComponent implements OnInit {
  public readonly personalRepos = 'https://github.com/TaylorShane';
  public readonly graphyLink =
    'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy';

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public readonly graphyImages = [
    '../../assets/img/graphy/Screenshot_1500145891.png',
    '../../assets/img/graphy/Screenshot_1500145896.png',
    '../../assets/img/graphy/Screenshot_1500145900.png',
    '../../assets/img/graphy/Screenshot_1500145905.png',
    '../../assets/img/graphy/Screenshot_1500149157.png',
    '../../assets/img/graphy/Screenshot_1500149162.png',
    '../../assets/img/graphy/Screenshot_1500149174.png',
  ];

  public readonly slideInterval = 3000;

  constructor() {}

  ngOnInit() {
    console.info(this.graphyImages);
  }
}
