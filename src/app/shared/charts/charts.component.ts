import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/config/github.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit, AfterViewInit {
  reposData = [''];

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
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' },
        ],
      },
    ],
  };

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    // console.log(
    //   'this is the repos data from the charts component : ' + this.reposData
    // );
    this.getAllReposData();
  }

  ngAfterViewInit(): void {
    // if (this.reposData != undefined && this.reposData.length > 0) {
    //   console.log(
    //     'this is the repos data from the charts component : ' + this.reposData
    //   );
    // }
  }

  getAllReposData() {
    this.githubService.getAllRepos().subscribe(
      (response) => {
        response.forEach((repo) => {
          this.reposData.push(
            repo.name,
            repo.description,
            repo.url,
            repo.language,
            'split'
          );
        });
      },
      (error) => {
        console.log('This is the error' + error);
      },
      () => {
        this.addReposDataToChart();
      }
    );
  }

  addReposDataToChart() {
    for (let index = 0; index < this.reposData.length; index++) {
      const element = this.reposData[index];
      this.options.series[index] = {
        name: this.reposData[index],
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' },
        ],
      };
    }
  }
}
