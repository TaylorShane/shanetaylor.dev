import { Component, HostBinding, OnInit } from '@angular/core';
import { NavLinks } from '../shared/models/models';

@Component({
  selector: 'st-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isCollapsed = true;
  relativeLinks: NavLinks[] = [
    {
      name: 'Graphy',
      link: '/#main#Graphy',
    },
    {
      name: 'Trump Haiku Generator',
      link: '/#main#Trump Haiku Generator',
    },
    {
      name: 'Spotter',
      link: '/#main#Spotter',
    },
    {
      name: 'Brew Buddy',
      link: '/#main#BrewBuddy',
    },
    {
      name: 'Documentation',
      link: '/#main#Software Engineering Documentation',
    },
    {
      name: 'SQL Database',
      link: '/#main#SQL Database',
    },
  ];
  navBarContent = {
    name: 'Shane Taylor',
    title: 'Software Developer',
    who: 'Who',
    what: 'What',
    samplesText: 'Project Samples',
    projects: this.relativeLinks,
  };
}
