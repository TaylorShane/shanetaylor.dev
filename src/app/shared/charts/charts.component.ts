import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import * as echarts from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github.service';
import { RepoData } from '../models/models';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'st-charts',
  templateUrl: './charts.component.html',
  imports: [NgxEchartsDirective]
})
export class ChartsComponent implements OnInit, OnDestroy {
  private githubService = inject(GithubService);

  readonly chartName = input<string>(undefined);
  readonly theme = input<string>(undefined);
  repoData: RepoData[] = [];
  eChartsInstance: any;
  singleRepoSubscription$: any;
  screenWidth = '100%';

  options: EChartsOption = {
    backgroundColor: '#333333',
    color: [
      '#1abc9c',
      '#2ecc71',
      '#3498db',
      '#9b59b6',
      '#e67e22',
      '#b21ab4',
      '#6f0099',
      '#2a2073',
      '#0b5ea8',
      '#17aecc',
      '#b3b3ff',
      '#eb99ff',
      '#fae6ff',
      '#a866c1',
      '#011f4b',
      '#03396c',
      '#005b96',
      '#6497b1',
      '#b3cde0',
      '#4f76a8'
    ],
    scale: true,
    // scaleSize: 50,
    responsive: true,
    maintainAspectRatio: true,
    grid: {
      left: 100,
      top: 10,
      right: 100,
      bottom: 100
    },
    title: {
      textStyle: {
        color: '#1abc9c'
      },
      textVerticalAlign: 'middle',
      textBaseline: 'bottom',
      text: 'Github Projects',
      subtext: 'Current projects in my Github repository',
      bottom: 0
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
      }
      /*eslint-disable */
    },
    legend: {
      align: 'right',
      mainType: 'legend',
      orient: 'vertical',
      right: 0,
      selectorLabel: {
        show: true,
        color: '#FFFFFF',
        backgroundColor: 'transparent'
      },
      show: true,
      type: 'scroll'
    },
    calculable: true,
    series: [
      {
        data: this.repoData,
        radius: this.screenWidth,
        roseType: 'area',
        type: 'pie',
        label: {
          show: true,
          color: '#FFFFFF',
          backgroundColor: 'transparent'
        }
      }
    ]
  };

  private readonly destroy$ = new Subject<void>();

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
          data: this.repoData
        }
      ];
      this.options.legend = {
        orient: 'horizontal',
        mainType: 'legend',
        show: true,
        align: 'auto'
      };
      this.resizeChart();
    }
    this.getChartData();
  }

  getChartData(): void {
    const chartName = this.chartName();
    if (chartName !== undefined) {
      if (chartName === 'allRepos') {
        this.getAllReposData();
      } else if (chartName === 'shanetaylor') {
        this.getSTdevChartData(chartName);
      }
    }
  }

  onChartInit(ec: any): void {
    this.eChartsInstance = ec;
    this.resizeChart();
  }

  resizeChart(): void {
    if (this.eChartsInstance) {
      this.eChartsInstance.resize({ width: 'auto', height: 'auto' });
    }
  }

  getAllReposData(): void {
    this.githubService
      .getDataForAllRepos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          data = data.filter((repo) => repo.name !== 'TaylorShane');
          data.forEach((repo) => {
            const element = new RepoData(repo);
            this.repoData.push(element);
          });
        },
        error: (error) => {
          console.error('Unable to get all repo data ' + error);
        }
      });
  }

  private getSTdevChartData(repoName: string): void {
    this.setChartOptions(repoName);
    this.githubService
      .getAllLanguagesForGivenRepo(repoName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (langData) => {
          for (let index = 0; index < langData.lang.length; index++) {
            this.repoData[index] = {
              value: langData.size[index],
              name: langData.lang[index],
              description: repoName,
              language: langData.lang[index],
              url: 'https://github.com/TaylorShane/' + repoName
            };
          }
        },
        error: (error) => {
          console.error('Unable to get stdev chart data ' + error);
        }
      });
  }

  private setChartOptions(repoName: string): void {
    let stDevChartOptions = this.options;

    stDevChartOptions.title = {
      text: repoName + '.dev',
      subtext: 'languages used and proportions ',
      textStyle: {
        color: '#1abc9c'
      },
      textVerticalAlign: 'middle',
      textBaseline: 'bottom',
      bottom: 0
    };
    stDevChartOptions.tooltip = {
      confine: true,
      trigger: 'item',
      formatter(params): any {
        return `${params.name}<br />
                ${params.percent}% of all languages used in this project`;
      }
    };
  }
}
