import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public readonly footerText = 'What can I develop for you?';
  constructor() {}

  ngOnInit(): void {}
}
