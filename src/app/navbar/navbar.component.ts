import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
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
}
