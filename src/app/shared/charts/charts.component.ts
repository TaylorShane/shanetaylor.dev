import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { shareReplay, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { RepoData } from '../models/models';
import { EChartsOption } from 'echarts';

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

  options: EChartsOption;
  // = {
  //   series: [
  //     {
  //       type: 'bar',
  //       coordinateSystem: 'cartesian2d',
  //       data: this.repoData,
  //       labelLayout: { draggable: true },
  //     },
  //   ],
  // };

  private readonly destroy$ = new Subject<void>();

  constructor(private githubService: GithubService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    if (window.innerWidth < 560) {
      this.screenWidth = '50%';
      // this.resizeChart();
    }
    this.allReposSubscription$ = this.githubService.getAllRepos().pipe(shareReplay(1));
    this.getChartData();
  }

  getChartData(): void {
    if (this.chartName !== undefined) {
      if (this.chartName === 'allRepos') {
        this.getAllReposData();
        this.setChartOptions();
      } else if (this.chartName === 'shanetaylor') {
        this.getSTdevChartData(this.chartName);
      }
    }
  }

  onChartInit(ec): void {
    this.eChartsInstance = ec;
    // this.resizeChart();
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

  private setChartOptions(repoName?: string): void {
    if (repoName) {
      this.options = {
        title: {
          text: repoName + '.dev project stats',
          subtext: 'languages used and proportions ',
          textAlign: 'center',
          textBaseline: 'middle',
        },
        tooltip: {
          confine: true,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow', // 'line' | 'shadow'
          },
          /* eslint-disable-next-line */
          formatter(params): any {
            return `${params[0].name}<br />
                    ${params[0].percent}% of all languages used in this project`;
          },
        },
      };
    } else {
      this.options = {
        // xAxis: [
        //   {
        //     type: 'category',
        //     data: this.repoData,
        //   },
        // ],
        scale: true,
        title: {
          textAlign: 'left',
          // textVerticalAlign: 'middle',
          // textBaseline: 'top',
          // backgroundColor: '#000000',
          textStyle: {
            color: '#1abc9c',
          },
          padding: 5,
          text: 'Github Repositories',
          subtext: 'Current Repos in my Github',
          borderRadius: 5,
        },
        tooltip: {
          confine: true,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow', // 'line' | 'shadow'
          },
          /* eslint-disable-next-line */
          formatter(params): any {
            return params[0].data.language == null
              ? `<div>${params[0].name}</div>
        <div class="text-wrap">${params[0].data.description}</div>
        <div> Project size in bytes: ${params[0].data.value}</div>`
              : `<div>${params[0].name}</div>
        <div class="text-wrap">${params[0].data.description}</div>
        <div>Predominant Language: ${params[0].data.language}</div>
        <div> Project size in bytes: ${params[0].data.value}</div>`;
          },
        },
        // legend: {
        //   orient: 'horizontal',
        //   align: 'auto',
        // },
        // calculable: true,
      };
    }

    this.options.grid = {
      left: 200,
      top: 10,
      right: 200,
      bottom: 50,
    };

    this.options.legend = {
      // orient: 'horizontal',
      // align: 'auto',
      show: true,
      backgroundColor: '#FFA500',
      data: [
        'BrewBuddy-Android',
        'BrewBuddy-iOS',
        'ColYCBillboard.com',
        'ColYCWeather.com',
        'Graphy',
        'Modern-Database-Management',
        'rpi_ws281x',
        'shanetaylor.dev',
        'Spotter',
      ],
      // itemHeight: 30,
    };

    this.options.xAxis = [
      {
        type: 'category',
        data: this.repoData,
      },
    ];

    this.options.yAxis = [
      {
        type: 'value',
      },
    ];

    this.options.series = [
      {
        type: 'bar',
        data: this.repoData,
        showBackground: true,
        // labelLayout: { draggable: true },
      },
    ];
    console.warn('repo data ' + repoName, this.repoData);
  }
}
