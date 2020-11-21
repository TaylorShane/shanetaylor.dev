import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  private headshot = require('../../assets/img/profile_image.jpg');

  constructor() { }

  ngOnInit(): void {
  }

}
