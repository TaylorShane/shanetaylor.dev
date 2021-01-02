import { Component, OnInit } from '@angular/core';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  isCollapsed = true;
  navBarContent = {
    name: 'Shane Taylor',
    title: 'Software Developer',
    who: 'Who',
    what: 'What',
    projects: {
      samplesText: 'Project Samples',
      graphy: 'Graphy',
      thg: 'Trump Haiku Generator',
      spotter: 'Spotter',
      documentation: 'Development Documentation',
      brewBuddy: 'BrewBuddy',
    },
  };

  ngOnInit(): void {}
}
