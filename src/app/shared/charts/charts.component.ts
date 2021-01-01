import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/config/github.service';
import { RepoData } from '../models/models';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  @Input() chartName: string;
  @Input() theme: string;
  repoData: RepoData[] = [];
  echartsInstance: any;

  options = {
    title: {
      text: "Shane's Github Stats",
      subtext: 'languages and size',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter(params): any {
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
    this.getChartData();
  }

  getChartData(): void {
    if (this.chartName != undefined) {
      if (this.chartName === 'allRepos') {
        this.getAllReposData();
      } else if (this.chartName != undefined) {
        this.getIndividualRepoData(this.chartName);
      }
    }
  }

  onChartInit(ec): void {
    this.echartsInstance = ec;
    this.getChartData();
    this.resizeChart();
  }

  resizeChart(): void {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  getAllReposData(): void {
    /**
     * names:
     * BrewBuddy-Android
     * BrewBuddy-iOS
     * Graphy
     * Modern-Database-Management
     * shanetaylor
     * Spotter
     * */
    this.githubService.getAllRepos().subscribe(
      (data) => {
        for (const i in data) {
          if (data[i].hasOwnProperty('name')) {
            if (data[i].name !== '') {
              this.repoData[i] = {
                value: data[i].size,
                name: data[i].name,
                description: data[i].description || '',
                language: data[i].language,
                url: data[i].url,
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

  private getIndividualRepoData(repoName: string) {
    this.setChartOptions(repoName);
    this.githubService
      .getAllLanguagesForGivenRepo(repoName)
      .subscribe((data) => {
        const keys = Object.keys(data);
        let values = Object.values(data) as number[];
        let predominantLanguage = Math.max(...values);

        for (let index = 0; index < keys.length; index++) {
          this.repoData[index] = {
            value: values[index],
            name: keys[index],
            description: repoName,
            language: keys[values.indexOf(Math.max(...values))],
            url: 'https://github.com/TaylorShane/' + repoName,
          };
        }
      });
  }

  private setChartOptions(repoName: string) {
    this.options = {
      title: {
        text: repoName + ' project languages statistics',
        subtext: 'languages used and poroportions ',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter(params): any {
          return `${params.name}<br />
                  <div>Predominant Language: ${params.data.language}</div>
                  (${params.name} is ${params.percent}% of all languages used in this project)`;
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
  }
}
