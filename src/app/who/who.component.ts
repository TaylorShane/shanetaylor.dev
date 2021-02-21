import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss'],
})
export class WhoComponent implements OnInit {
  profileImage = '../../assets/img/profile_image.jpg';
  whoBlurb =
    'I am an Angular and mobile focused front-end software developer and travel enthusiast.';

  constructor() {}

  ngOnInit(): void {}
}
