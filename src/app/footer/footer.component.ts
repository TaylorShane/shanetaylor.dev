import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public readonly footerText = 'What can I develop for you?';
  constructor() {}

  ngOnInit(): void {}
}
