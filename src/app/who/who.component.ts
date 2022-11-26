import { Component } from '@angular/core';

@Component({
  selector: 'st-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss'],
})
export class WhoComponent {
  profileImage = '../../assets/img/profile_image.webp';
  whoBlurb = 'I am an Angular and mobile focused front-end software developer and travel enthusiast.';
}
