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
  repo: {
    name: string;
    lang: string[];
    size: number[];
  };
  constructor(name, languageResponse: any) {
    this.repo = {
      name: name,
      lang: Object.keys(languageResponse),
      size: Object.values(languageResponse),
    };
  }
}
