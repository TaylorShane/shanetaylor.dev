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
    this.value = repoResponse.size;
  }
}
export class Languages {
  name: string;
  lang: string[];
  size: number[];

  constructor(name, languageResponse: any) {
    (this.name = name),
      (this.lang = Object.keys(languageResponse)),
      (this.size = Object.values(languageResponse));
  }
}

export class ProjectData {
  attributes: string[];
  blurb: string;
  images: string[];
  name: string;
  playstoreLink?: string;
  repoLink?: string;
  websiteLink?: string;
  docLinks?: string[];

  constructor(
    attributes,
    blurb,
    images,
    name,
    playstoreLink?,
    repoLink?,
    websiteLink?,
    docLinks?
  ) {
    this.attributes = attributes;
    this.blurb = blurb;
    this.images = images;
    this.name = name;
    this.playstoreLink = playstoreLink;
    this.repoLink = repoLink;
    this.websiteLink = websiteLink;
    this.docLinks = docLinks;
  }
}
