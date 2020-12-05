export interface RepoData {
  description: string;
  language: string;
  name: string;
  url: string;
  value: number;
  languages: {};
}

export enum ChartType {
  allRepos,
  oneRepo,
}
