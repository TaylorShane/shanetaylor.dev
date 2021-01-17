import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss'],
})
export class WhoComponent implements OnInit {
  profileImage = '../../assets/img/profile_image.jpg';

  constructor() {}

  ngOnInit(): void {}
}
