import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {
  networkCert = '../../assets/docs/Shane_Taylor_TestOut_Network_Pro_Certification.pdf';
  graphyLink = 'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy';
  constructor() { }

  ngOnInit(): void {
  }

}
