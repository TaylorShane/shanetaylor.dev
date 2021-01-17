import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/config/github.service';
import { RepoData } from '../models/models';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @Input() chartName: string;
  @Input() theme: string;
  repoData: RepoData[] = [];
  echartsInstance: any;
  allReposSubscription$: any;
  singleRepoSubscription$: any;

  options = {
    title: {
      text: "Shane's Github Stats",
      subtext: 'Current projects in my Github repository',
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
    this.allReposSubscription$ = this.githubService
      .getAllRepos()
      .pipe(shareReplay(1));
    this.getChartData();
  }

  getChartData(): void {
    if (this.chartName != undefined) {
      if (this.chartName === 'allRepos') {
        this.getAllReposData();
      } else if (this.chartName === 'shanetaylor') {
        this.getSTdevChartData(this.chartName);
      }
    }
  }

  onChartInit(ec): void {
    this.echartsInstance = ec;
    this.resizeChart();
  }

  resizeChart(): void {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  getAllReposData(): void {
    this.allReposSubscription$.subscribe(
      (data) => {
        data.forEach((repo) => {
          let element = new RepoData(repo);
          this.repoData.push(element);
        });
      },
      (error) => {
        console.log('Unable to getAllRepos()' + error);
      },
      () => {}
    );
  }

  private getSTdevChartData(repoName: string) {
    this.setChartOptions(repoName);
    this.githubService
      .getAllLanguagesForGivenRepo(repoName)
      .subscribe((data) => {
        const keys = Object.keys(data);
        let values = Object.values(data) as number[];

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
        text: repoName + '.dev project languages statistics',
        subtext: 'languages used and poroportions ',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter(params): any {
          return `${params.name}'<br />
                  <div>Predominant Language: ${params.data.language}</div>
                  (${params.name} is ${params.percent}% of all languages used in this project)`;
        },
      },
      legend: {
        x: 'center',
        y: 'bottom',
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
