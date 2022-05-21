export class RepoData {
  description: string;
  language: string;
  name: string;
  url: string;
  value: number;
  constructor(repoResponse: any) {
    this.description = repoResponse.description || '';
    this.language = repoResponse.language;
    this.name = repoResponse.name;
    this.url = repoResponse.url;
    this.value = repoResponse.size || repoResponse.value;
  }
}
export class Languages {
  name: string;
  lang: string[];
  size: number[];

  constructor(name, languageResponse: any) {
    this.name = name;
    this.lang = Object.keys(languageResponse);
    this.size = Object.values(languageResponse);
  }
}

export class NavLinks {
  name: string;
  link: string;
}

/**
 * @member id Used to on projects with repos to get language data
 * @member attributes bullet points about project
 * @member blurb  short description
 * @member images string resource location
 * @member name name used for link and displayed in HTML
 * @member languageData languages used gathered from github
 * @member playstoreLink link to app in playstore
 * @member repoLink link to github repo
 * @member websiteLink link to project site
 * @member docLinks url location to .pdf
 */
export class ProjectData {
  id?: string;
  attributes: string[];
  blurb: string;
  images: string[];
  portrait: boolean;
  name: string;
  languageData?: Languages;
  playstoreLink?: string;
  repoLink?: string;
  websiteLink?: string;
  docLinks?: string[];
  userGuideLink?: string;
  privacyLink?: string;
}
