import { Component } from '@angular/core';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss'],
})
export class WhatComponent {
  /*eslint-disable */
  networkCert =
    '../../assets/docs/Shane_Taylor_TestOut_Network_Pro_Certification.pdf';
  graphyLink =
    'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy';

  whatBlurb = {
    current:
      'Self-motivated and customer focused developer creating smart building applications used by top 10 Universities, government agencies, and fortune 500 companies worldwide. With both small E-commerce and global business solutions experience, I bring contemplative and forward-thinking ideas to my work by leveraging technology to drive well-rounded solutions.',
    android:
      "I've earned a Bachelor of Science Cum Laude in Computer Science from Northeastern Illinois University and I am a registered Android Developer.",
    graphy: {
      a: 'Check out my educational app',
      graphy: 'Graphy, ',
      b:
        'created with help from a National Science Foundation grant to help middle school kids learn geometry in a fun and interactive way.',
    },
    testOut: {
      a: 'I also have a',
      b: 'Network Pro certification',
      c: 'with TestOut.',
    },
  };
  /*eslint-disable */
}
