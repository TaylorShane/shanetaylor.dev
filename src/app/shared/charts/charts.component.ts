import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/config/github.service';
import { ChartType, RepoData } from '../models/models';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit, AfterViewInit {
  @Input() chartType: ChartType;
  repoData: RepoData[] = [];

  theme: string;
  options = {
    title: {
      text: "Shane's Github Stats",
      subtext: 'languages and size',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return `${params.name}<br />
                ${params.data.description}
                <div>Predominant Language: ${params.data.language}</div>
                <div> Project size in bytes: ${params.data.value}</div>
                (${params.percent}% of all projects)`;
      },
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
        'rose5',
        'rose6',
        'rose7',
        'rose8',
      ],
    },
    calculable: true,
    series: [
      {
        name: 'this area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: this.repoData,
      },
    ],
  };

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getAllReposData();
  }

  ngAfterViewInit(): void {
    this.getAllLanguages(this.repoData);
  }

  getAllReposData() {
    this.githubService.getAllRepos().subscribe(
      (response) => {
        for (const i in response) {
          if (response[i].hasOwnProperty('name')) {
            if (response[i].name !== '') {
              this.repoData[i] = {
                value: response[i].size,
                name: response[i].name,
                description: response[i].description || '',
                language: response[i].language,
                url: response[i].url,
              };
            }
          }
        }
      },
      (error) => {
        console.log('This is the getAllRepos error' + error);
      },
      () => {}
    );
  }

  private getAllLanguages(repoName: any): void {
    repoName.forEach((repo) => {
      this.githubService.getAllLanguagesForGivenRepo(repo.name).subscribe(
        (response) => {
          try {
            const langsObj = { name: repo, languages: response };
            this.repoData[repo].languages = langsObj;
          } catch (error) {
            console.log(error);
          }
        },
        (error) => {
          console.warn('getAlllanguages error :' + error);
        },
        () => {}
      );
    });
  }
}
