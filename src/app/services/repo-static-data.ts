import { Languages, ProjectData } from '../shared/models/models';

export const shanetaylorLangData: Languages = undefined;
export const graphyLangData: Languages = undefined;
export const spotterLangData: Languages = undefined;
export const brewbuddyAndroidLangData: Languages = undefined;
export const brewbuddyIosLangData: Languages = undefined;
export const mdbmLangData: Languages = undefined;

export const graphyInfo: ProjectData = {
  id: 'graphy',
  attributes: [
    'Live in Playstore',
    'Responsive Layout',
    'Responsive design',
    'Compatible With 90+% Android',
    'Randomly generated puzzles'
  ],
  blurb:
    'Graphy is an educational Android App designed for common class-room Chrome tablets that I created during a 10-week internship at Northeastern Illinois University. Selected as the Computer Science expert for a mathematics focused group of students and professors, I worked on a National Science Foundation research grant focusing on Computational Thinking and bringing that thinking to younger students. I solely developed and deployed the educational app Graphy to help pre-service teachers teach the fundamentals of Geometry to middle school students while employing Computational Thinking.',
  image: '../../assets/img/graphy/ScreenShots/graphy.webp',
  name: 'Graphy',
  languageData: graphyLangData,
  playstoreLink: 'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy',
  repoLink: 'https://github.com/TaylorShane/NEIU2017SummerInternship'
};

export const thgInfo: ProjectData = {
  attributes: ['Twitter API integration to curate haiku', 'Responsive design', 'Compatible With 90+% Android'],
  blurb:
    'Trump Haiku Generator creates beautiful and inspirational haiku using words taken directly from the presidents typed and spoken words. Two flavors of haiku are offered. The random button creates a haiku using three random sentences that Donald Trump has spoken. The real displays a haiku that Donald Trump has spoken fully and word for word.',
  image: '../../assets/img/THG/thg.webp',
  name: 'Trump Haiku Generator',
  playstoreLink: 'https://play.google.com/store/apps/details?id=com.shane_taylor.trumphaikugenerator&hl=en',
  websiteLink: 'https://trumphaikugenerator.com/'
};

export const spotterInfo: ProjectData = {
  id: 'Spotter',
  attributes: [
    'XML database',
    'Event driven',
    'Data binding',
    'C# collections',
    '.NET framework',
    'Low coupling',
    'High cohesion'
  ],
  blurb:
    'Spotter is a Windows Presentation Foundation application written in C# and created in Visual Studio. Spotter is a diet and exercise App to help users manage their calorie count, select a workout type, manage their workout schedule, and motivate them to achieve the body type they desire.',
  image: '../../assets/img/spotter/meal_calories_total.webp',
  name: 'Spotter',
  languageData: spotterLangData,
  repoLink: 'https://github.com/TaylorShane/Spotter_group'
};

export const brewBuddyInfo: ProjectData = {
  id: 'BrewBuddy-Android',
  attributes: ['SQLite Database', 'Listviews', 'Adapters', 'Database Versioning', 'Cursor Adapters'],
  blurb:
    'Brewbuddy is a mobile application built in both Android and iOS versions. It is designed to help the home brewer brew great beers. Brewbuddy has a database of popular    recipes, an ABV calculator, and a bottle calculator so that come    bottling day you know exactly how many bottles to sanitize. You can even add your favorite recipes directly to the home screen for quick access.',
  image: '../../assets/img/brewbuddy/brew_buddy_3_screens.webp',
  name: 'BrewBuddy',
  repoLink: 'https://github.com/TaylorShane/BrewBuddy-Android'
};

export const mdbmInfo: ProjectData = {
  id: 'Modern-Database-Management',
  attributes: ['3NF Relational Model', 'Stored Procedures', 'Functions', 'Packages', 'Triggers'],
  blurb:
    'Example complex relational database with Oracle SQL Developer with a script to create the database objects. Which includes the tables and primary/foreign key constraints on those tables, indexes, sequences, views, and PL/SQL stored procedures, functions, packages, and triggers. Also a 3NF relational model, business rules, a data dictionary, ER diagram, and a general description.',
  image: '../../assets/img/mdbm/mdbm.webp',
  name: 'SQL Database',
  languageData: mdbmLangData,
  repoLink: 'https://github.com/TaylorShane/Modern-Database-Management'
};
