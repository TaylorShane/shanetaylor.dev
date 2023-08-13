import { Languages } from '../shared/models/models';

export const allRepoBackupData = [
  {
    description: 'Android App for home brewing recipes and calculations',
    language: 'Java',
    name: 'BrewBuddy-Android',
    url: 'https://api.github.com/repos/TaylorShane/BrewBuddy-Android',
    value: 17960
  },
  {
    description: 'iOS app for home brewing recipes and calculations',
    language: 'Swift',
    name: 'BrewBuddy-iOS',
    url: 'https://api.github.com/repos/TaylorShane/BrewBuddy-iOS',
    value: 15522
  },
  {
    description: 'Web application to serve club content on displays throughout the club',
    language: 'TypeScript',
    name: 'ColYCBillboard.com',
    url: 'https://api.github.com/repos/TaylorShane/ColYCBillboard.com',
    value: 100774
  },
  {
    description: 'Weather app for ColYC screens',
    language: 'TypeScript',
    name: 'ColYCWeather.com',
    url: 'https://api.github.com/repos/TaylorShane/ColYCWeather.com',
    value: 777
  },
  {
    description: 'Educational Android app created to help middle school students learn geometry.',
    language: 'Java',
    name: 'Graphy',
    url: 'https://api.github.com/repos/TaylorShane/Graphy',
    value: 8925
  },
  {
    description: 'A 3NF relational database.',
    language: 'PLSQL',
    name: 'Modern-Database-Management',
    url: 'https://api.github.com/repos/TaylorShane/Modern-Database-Management',
    value: 381
  },
  {
    description: 'Userspace Raspberry Pi PWM library for WS281X LEDs',
    language: 'C',
    name: 'rpi_ws281x',
    url: 'https://api.github.com/repos/TaylorShane/rpi_ws281x',
    value: 408
  },
  {
    description: 'Angular Developer profile website',
    language: 'TypeScript',
    name: 'shanetaylor.dev',
    url: 'https://api.github.com/repos/TaylorShane/shanetaylor.dev',
    value: 245413
  },
  {
    description: 'A WPF C# app that tracks caloric intake and exercise management.',
    language: 'C#',
    name: 'Spotter',
    url: 'https://api.github.com/repos/TaylorShane/Spotter',
    value: 20706
  },
  {
    description: 'Config files for my GitHub profile.',
    language: null,
    name: 'TaylorShane',
    url: 'https://api.github.com/repos/TaylorShane/TaylorShane',
    value: 2
  }
];

export function getBackupLangData(repo: string): Languages {
  switch (repo) {
    case 'Modern-Database-Management':
      return {
        name: 'Modern-Database-Management',
        lang: ['PLSQL'],
        size: [13155]
      };
    case 'Spotter':
      return {
        name: 'Spotter',
        lang: ['C#'],
        size: [63114]
      };
    case 'graphy':
      return {
        name: 'graphy',
        lang: ['Java'],
        size: [60392]
      };
    case 'BrewBuddy-Android':
      return {
        name: 'BrewBuddy-Android',
        lang: ['Java'],
        size: [21838]
      };
    case 'shanetaylor':
      return {
        name: 'shanetaylor',
        lang: ['TypeScript', 'HTML', 'SCSS', 'JavaScript'],
        size: [44567, 30793, 2193, 1919]
      };
    default:
      return null; // Return null or handle the case when the repo doesn't have backup language data
  }
}
