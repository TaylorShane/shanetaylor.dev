import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { shareReplay, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { RepoData } from '../models/models';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'st-charts',
  templateUrl: './charts.component.html',
})
export class ChartsComponent implements OnInit, OnDestroy {
  @Input() chartName: string;
  @Input() theme: string;
  repoData: RepoData[] = [];
  eChartsInstance: any;
  allReposSubscription$: Observable<RepoData[]>;
  singleRepoSubscription$: any;
  screenWidth = '100%';

  options = {
    scale: true,
    // scaleSize: 200,
    responsive: true,
    maintainAspectRatio: true,
    grid: {
      left: 100,
      top: 10,
      right: 100,
      bottom: 100,
    },
    title: {
      textStyle: {
        color: '#1abc9c',
      },
      textVerticalAlign: 'middle',
      textBaseline: 'bottom',
      text: 'Github Projects',
      subtext: 'Current projects in my Github repository',
      x: 'center',
    },
    tooltip: {
      confine: true,
      trigger: 'item',
      /*eslint-disable */
      formatter(params): any {
        return params.data.language == null
          ? `<div>${params.name}</div>
        <div class="text-wrap">${params.data.description}</div>
        <div> Project size in bytes: ${params.data.value}</div>`
          : `<div>${params.name}</div>
        <div class="text-wrap">${params.data.description}</div>
        <div>Predominant Language: ${params.data.language}</div>
        <div> Project size in bytes: ${params.data.value}</div>
        <div>(${params.percent}% of all projects)</div>`;
      },
      /*eslint-disable */
    },
    legend: {
      x: 'center',
      y: 'bottom',
    },
    calculable: true,
    series: [
      {
        type: 'pie',
        radius: [20, 110],
        roseType: 'area',
        data: this.repoData,
        labelLayout: { draggable: true },
      },
    ],
  };

  private readonly destroy$ = new Subject<void>();

  constructor(private githubService: GithubService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    if (window.innerWidth < 560) {
      this.screenWidth = '50%';
      this.options.series = [
        {
          type: 'pie',
          radius: this.screenWidth,
          roseType: 'area',
          data: this.repoData,
        },
      ];
      this.options.legend = {
        orient: 'horizontal',
        mainType: 'legend',
        show: true,
        align: 'auto',
      };
      this.resizeChart();
    }
    this.allReposSubscription$ = this.githubService.getAllRepos().pipe(shareReplay(1));
    this.getChartData();
  }

  getChartData(): void {
    if (this.chartName !== undefined) {
      if (this.chartName === 'allRepos') {
        this.getAllReposData();
      } else if (this.chartName === 'shanetaylor') {
        this.getSTdevChartData(this.chartName);
      }
    }
  }

  onChartInit(ec): void {
    this.eChartsInstance = ec;
    this.resizeChart();
  }

  resizeChart(): void {
    if (this.eChartsInstance) {
      this.eChartsInstance.resize({ width: 'auto', height: 'auto' });
    }
  }

  getAllReposData(): void {
    this.allReposSubscription$.pipe(takeUntil(this.destroy$)).subscribe(
      (data) => {
        data = data.filter((repo) => repo.name !== 'TaylorShane');
        data.forEach((repo) => {
          const element = new RepoData(repo);
          this.repoData.push(element);
        });
      },
      (error) => {
        console.log('Unable to getAllRepos()' + error);
      },
      () => {}
    );
  }

  private getSTdevChartData(repoName: string): void {
    this.setChartOptions(repoName);
    this.githubService.getAllLanguagesForGivenRepo(repoName).subscribe((langData) => {
      for (let index = 0; index < langData.lang.length; index++) {
        this.repoData[index] = {
          value: langData.size[index],
          name: langData.lang[index],
          description: repoName,
          language: langData.lang[index],
          url: 'https://github.com/TaylorShane/' + repoName,
        };
      }
    });
  }

  private setChartOptions(repoName: string): void {
    this.options = {
      scale: true,
      scaleSize: 200,
      responsive: true,
      maintainAspectRatio: false,
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      title: {
        text: repoName + '.dev project stats',
        subtext: 'languages used and poroportions ',
        x: 'center',
      },
      tooltip: {
        confine: true,
        trigger: 'item',
        formatter(params): any {
          return `${params.name}<br />
                  ${params.percent}% of all languages used in this project`;
        },
      },
      legend: {
        x: 'center',
        y: 'bottom',
      },
      calculable: true,
      series: [
        {
          type: 'pie',
          radius: [20, 110],
          roseType: 'area',
          data: this.repoData,
        },
      ],
    };
  }
}
