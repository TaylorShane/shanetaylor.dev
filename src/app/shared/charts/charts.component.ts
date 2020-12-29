import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/config/github.service';
import { ChartType, Languages, RepoData, Series } from '../models/models';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit, AfterViewInit {
  @Input() chartType: ChartType;
  repoData: RepoData[] = [];
  repoLangData: Languages[] = [];
  echartsInstance: any;

  theme: string;
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
    this.getAllReposData();
  }

  ngAfterViewInit(): void {}

  onChartInit(ec): void {
    this.echartsInstance = ec;
    // this.resizeChart();
  }

  resizeChart(): void {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  getIndividualRepoChartOptions(): void {
    for (const i in this.repoData) {
      for (const j in this.repoData) {
        if (this.repoData[i].name === this.repoLangData[j].name) {
          this.repoData[i].languages = this.repoLangData[j];
          return;
        }
      }
    }
    this.options.series = [
      {
        name: 'FOO area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          {
            description: 'foo',
            language: 'foo lang',
            name: 'Foo name',
            url: 'foo url',
            value: 300,
            languages: {
              name: 'languages name',
              languages: {
                java: 230,
              },
            },
          },
        ],
      },
    ];
    console.log(this.options.series);
    // this.repoData = this.repoLangData;
  }

  getAllReposData(): void {
    this.githubService.getAllRepos2().subscribe(
      (data) => {
        // let langauges: Languages;
        for (const i in data) {
          if (data[i].hasOwnProperty('name')) {
            if (data[i].name !== '') {
              this.repoData[i] = {
                value: data[i].size,
                name: data[i].name,
                description: data[i].description || '',
                language: data[i].language,
                url: data[i].url,
                languages: {
                  name: data[i].name,
                  languages: {},
                },
              };
            }
          }
        }
      },
      (error) => {
        console.log('This is the getAllRepos error' + error);
      },
      () => {
        if (this.repoData.length > 0) {
          this.getAllLanguages(this.repoData);
        }
      }
    );
  }

  private getAllLanguages(repoData: any) {
    repoData.forEach((repo) => {
      let repoName = repo.name;
      this.githubService.getAllLanguagesForGivenRepo(repo.name).subscribe(
        (response) => {
          try {
            // langData[repo].languages = response;

            // TODO: change repoLangData to a type
            this.repoLangData.push({ name: repoName, languages: response });
          } catch (error) {
            console.log(error);
          }
        },
        (error) => {
          console.warn('getAlllanguages error :' + error);
        },
        () => {
          // TODO: Wait for all repsonse to come back.
          if (this.chartType === ChartType.oneRepo) {
            this.getIndividualRepoChartOptions();
          } else {
            this.options.series = [
              {
                name: 'this area',
                type: 'pie',
                radius: [30, 110],
                roseType: 'area',
                data: this.repoData,
              },
            ];
          }
        }
      );
    });
  }
}
