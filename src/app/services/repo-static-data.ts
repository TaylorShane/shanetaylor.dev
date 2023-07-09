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
  images: [
    '../../assets/img/graphy/ScreenShots/Screenshot_1500145891.webp',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500145896.webp',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500145900.webp',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500145905.webp',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500149162.webp',
    '../../assets/img/graphy/ScreenShots/Screenshot_1500149174.webp'
  ],
  portrait: false,
  name: 'Graphy',
  languageData: graphyLangData,
  playstoreLink: 'https://play.google.com/store/apps/details?id=com.shane_taylor.Graphy',
  repoLink: 'https://github.com/TaylorShane/NEIU2017SummerInternship',
  userGuideLink: '/#/graphy-user-guide',
  privacyLink: '/#/graphy-privacy-terms'
};

export const thgInfo: ProjectData = {
  attributes: ['Twitter API integration to curate haiku', 'Responsive design', 'Compatible With 90+% Android'],
  blurb:
    'Trump Haiku Generator creates beautiful and inspirational haiku using words taken directly from the presidents typed and spoken words. Two flavors of haiku are offered. The random button creates a haiku using three random sentences that Donald Trump has spoken. The real displays a haiku that Donald Trump has spoken fully and word for word.',
  images: [
    '../../assets/img/THG/Screenshot_1510861783.webp',
    '../../assets/img/THG/Screenshot_1510861989.webp',
    '../../assets/img/THG/Screenshot_1510861997.webp'
  ],
  portrait: true,
  name: 'Trump Haiku Generator',

  playstoreLink: 'https://play.google.com/store/apps/details?id=com.shane_taylor.trumphaikugenerator&hl=en',

  websiteLink: 'https://trumphaikugenerator.com/',
  privacyLink: 'https://www.trumphaikugenerator.com/#/privacy-terms'
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
  images: [
    '../../assets/img/spotter/signin_register.webp',
    '../../assets/img/spotter/signin.webp',
    '../../assets/img/spotter/registration.webp',
    '../../assets/img/spotter/meal_calories_total.webp',
    '../../assets/img/spotter/user_profile.webp'
  ],
  portrait: false,
  name: 'Spotter',
  languageData: spotterLangData,
  repoLink: 'https://github.com/TaylorShane/Spotter_group'
};

export const brewBuddyInfo: ProjectData = {
  id: 'BrewBuddy-Android',
  attributes: ['SQLite Database', 'Listviews', 'Adapters', 'Database Versioning', 'Cursor Adapters'],
  blurb:
    'Brewbuddy is a mobile application built in both Android and iOS versions. It is designed to help the home brewer brew great beers. Brewbuddy has a database of popular    recipes, an ABV calculator, and a bottle calculator so that come    bottling day you know exactly how many bottles to sanitize. You can even add your favorite recipes directly to the home screen for quick access.',
  images: [
    '../../assets/img/brewbuddy/Screenshot_1507672646.webp',
    '../../assets/img/brewbuddy/Screenshot_1507672671.webp',
    '../../assets/img/brewbuddy/Screenshot_1507672664.webp'
  ],
  portrait: true,
  name: 'BrewBuddy',
  repoLink: 'https://github.com/TaylorShane/BrewBuddy-Android'
};

export const sweDocInfo: ProjectData = {
  attributes: ['UML Flow Diagrams', 'Entity Relation Diagrams', 'Detailed Actions', 'Post Conditions', 'Validation'],
  blurb:
    'Trained in the methods of Software Engineering and the life cycle of the software development process, I am Agile and Scrum knowledgeable. I understand the necessity of exceptional communication skills and the importance of working your plan and planning your work.',
  images: ['../../assets/img/pixelhero/add.webp', '../../assets/img/pixelhero/srs.webp'],
  portrait: true,
  name: 'Software Engineering Documentation',
  docLinks: [
    'http://www.shane-taylor.com/shane-taylor.com/PixelHeroSRS.html',
    'http://www.shane-taylor.com/shane-taylor.com/PixelHeroADD.html'
  ]
};

export const mdbmInfo: ProjectData = {
  id: 'Modern-Database-Management',
  attributes: ['3NF Relational Model', 'Stored Procedures', 'Functions', 'Packages', 'Triggers'],
  blurb:
    'Example complex relational database with Oracle SQL Developer with a script to create the database objects. Which includes the tables and primary/foreign key constraints on those tables, indexes, sequences, views, and PL/SQL stored procedures, functions, packages, and triggers. Also a 3NF relational model, business rules, a data dictionary, ER diagram, and a general description.',
  images: ['../../assets/img/mdbm/mdbm-data-dictionary.webp', '../../assets/img/mdbm/mdbm-er-diagram.webp'],
  portrait: false,
  name: 'SQL Database',
  languageData: mdbmLangData,
  repoLink: 'https://github.com/TaylorShane/Modern-Database-Management'
};
