import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import * as echarts from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github.service';
import { Languages, RepoData } from '../models/models';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'st-charts',
  templateUrl: './charts.component.html',
  imports: [NgxEchartsDirective]
})
export class ChartsComponent implements OnInit, OnDestroy {
  private readonly githubService = inject(GithubService);
  private readonly destroy$ = new Subject<void>();

  readonly chartName = input<string>();
  readonly theme = input<string>();

  repoData: RepoData[] = [];
  eChartsInstance: any = null;
  loading = false;
  error: string | null = null;

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
    responsive: true,
    grid: {
      left: 100,
      top: 10,
      right: 100,
      bottom: 100
    },
    title: {
      textStyle: { color: '#1abc9c' },
      textVerticalAlign: 'middle',
      textBaseline: 'bottom',
      bottom: 0,
      text: 'Github Projects',
      subtext: 'Current projects in my Github repository'
    },
    tooltip: {
      confine: true,
      trigger: 'item'
    },
    legend: {
      align: 'right',
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
    series: [
      {
        data: this.repoData,
        radius: '100%',
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

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.innerWidth < 560) {
      this.options.series = [
        {
          type: 'pie',
          radius: '50%',
          roseType: 'area',
          data: this.repoData,
          label: {
            show: true,
            color: '#FFFFFF',
            backgroundColor: 'transparent'
          }
        }
      ];
      this.options.legend = {
        orient: 'horizontal',
        show: true,
        align: 'auto',
        selectorLabel: {
          show: true,
          color: '#FFFFFF',
          backgroundColor: 'transparent'
        }
      };
      this.options.grid = {
        left: 50,
        top: 10,
        right: 50,
        bottom: 100
      };
    }
    this.loadChartData();
  }

  ngOnDestroy(): void {
    this.disposeChart();
    this.destroy$.next();
    this.destroy$.complete();
  }

  onChartInit(chartInstance: any): void {
    this.eChartsInstance = chartInstance;
  }

  resizeChart(): void {
    if (this.eChartsInstance) {
      this.eChartsInstance.resize({ width: 'auto', height: 'auto' });
    }
  }

  private loadChartData(): void {
    const chartName = this.chartName();
    if (!chartName) {
      this.error = 'Chart name is required';
      return;
    }

    this.repoData = [];
    this.loading = true;
    this.error = null;

    if (chartName === 'allRepos') {
      this.loadAllRepositories();
    } else if (chartName === 'shanetaylor') {
      this.loadLanguageData(chartName);
    } else {
      this.error = `Unknown chart type: ${chartName}`;
      this.loading = false;
    }
  }

  private loadAllRepositories(): void {
    this.options.tooltip = {
      confine: true,
      trigger: 'item',
      formatter: (params: any): string => {
        const languageInfo = params.data.language ? `<div>Predominant Language: ${params.data.language}</div>` : '';
        return `<div><strong>${params.name}</strong></div>
                <div class="text-wrap">${params.data.description}</div>
                ${languageInfo}
                <div>Project size in bytes: ${params.data.value?.toLocaleString() || 'N/A'}</div>
                <div>(${params.percent}% of all projects)</div>`;
      }
    };

    this.githubService
      .getAllRepositories()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.loading = false))
      )
      .subscribe({
        next: (data: RepoData[]) => {
          this.repoData = data.filter((repo) => repo.name !== 'TaylorShane');
          this.options.series[0].data = this.repoData;
          if (this.eChartsInstance) {
            this.eChartsInstance.setOption(this.options);
          }
        },
        error: (error) => {
          console.error('Error loading repository data:', error);
          this.error = 'Failed to load repository data';
        }
      });
  }

  private loadLanguageData(repoName: string): void {
    this.setChartOptionsForRepo(repoName);
    this.githubService
      .getLanguagesForRepo(repoName)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.loading = false))
      )
      .subscribe({
        next: (langData: Languages) => {
          this.repoData = langData.lang.map((language, index) => ({
            value: langData.size[index],
            name: language,
            description: repoName,
            language: language,
            url: `https://github.com/TaylorShane/${repoName}`
          }));
          this.options.series[0].data = this.repoData;
          if (this.eChartsInstance) {
            this.eChartsInstance.setOption(this.options);
          }
        },
        error: (error) => {
          console.error('Error loading language data:', error);
          this.error = `Failed to load language data for ${repoName}`;
        }
      });
  }

  private setChartOptionsForRepo(repoName: string): void {
    this.options.title = {
      text: `${repoName}.dev`,
      subtext: 'Languages used and proportions',
      textStyle: { color: '#1abc9c' },
      textVerticalAlign: 'middle',
      textBaseline: 'bottom',
      bottom: 0
    };
    this.options.tooltip = {
      confine: true,
      trigger: 'item',
      formatter: (params: any): string => {
        return `${params.name}<br />
                ${params.percent}% of all languages used in this project`;
      }
    };
  }

  private disposeChart(): void {
    if (this.eChartsInstance) {
      this.eChartsInstance.dispose();
      this.eChartsInstance = null;
    }
  }
}
