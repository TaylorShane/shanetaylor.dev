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
  lang: string;
  size: number;
  constructor(languageResponse: any) {
    this.lang = languageResponse.lang;
    this.size = languageResponse.size;
  }
}
