import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GithubService } from 'src/app/config/github.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit, AfterViewInit {
  // @Input() reposData: string[] = [''];
  repoData = [];

  theme: string;
  options = {
    title: {
      text: "Nightingale's Rose Diagram",
      subtext: 'Mocking Data',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
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
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: this.repoData,
      },
    ],
  };
  reposData: string[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getAllReposData();
  }

  ngAfterViewInit(): void {}

  getAllReposData() {
    this.githubService.getAllRepos().subscribe(
      (response) => {
        // Object.assign(this.reposData, response);

        for (const i in response) {
          if (response[i].hasOwnProperty('name')) {
            this.reposData[i] = {
              name: response[i].name,
              size: response[i].size,
              description: response[i].description,
              language: response[i].language,
              url: response[i].url,
            };
            this.repoData.push({
              value: this.reposData[i].size,
              name: this.reposData[i].name,
            });
          }
        }
      },
      (error) => {
        console.log('This is the getAllRepos error' + error);
      },
      () => {
        // this.addReposDataToChart();
      }
    );
  }
}
