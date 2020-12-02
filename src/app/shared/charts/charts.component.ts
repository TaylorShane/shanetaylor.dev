import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/config/github.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit, AfterViewInit {
  repoData = [];

  theme: string;
  options = {
    title: {
      text: "Shane's Github Stats",
      subtext: 'languages and size',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      // formatter: '{a} <br/>{b} : {c} ({d}%)',
      formatter: function (params) {
        console.log('WTF are these params????');
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

  getLanguages(repo: string): any {
    this.githubService.getRepoLanguages(repo).subscribe(
      (resp) => {
        return resp;
      },
      (error) => {
        console.warn('There was an error getting langs for the repo %repo');
      },
      () => {
        console.log('Final object is : ' + this.repoData);
      }
    );
  }

  getAllReposData() {
    let repoNames: string[] = [];
    this.githubService.getAllRepos().subscribe(
      (response) => {
        // Object.assign(this.reposData, response);
        // TODO: make the chart data more meaningful

        // histories === response
        //   this.si_series[seriesIndex].data = histories.map((alarmItem: { createdAt: string; attributes: { [key: string]: any } }) => {
        //   const time: Date = moment.tz(alarmItem.createdAt, this.chartTimeZone).toDate();
        //   let alarmValue: number;
        //   if (yAxis) {
        //     alarmValue = yAxis?.min || 0; // TODO: Is this correct logic or should it be a ternary operator?
        //     if (alarmItem.attributes.alarmStatus && alarmItem.attributes.alarmStatus === 'alarm') {
        //       alarmValue = yAxis?.max || 100;
        //     }
        //   }
        //   return [time, alarmValue];
        // });

        for (const i in response) {
          if (response[i].hasOwnProperty('name')) {
            if (response[i].name !== '') {
              this.repoData.push({
                value: response[i].size,
                name: response[i].name,
                description: response[i].description || '',
                language: response[i].language,
                url: response[i].url,
              });
            }

            repoNames.push(response[i].name);
          }
        }
      },
      (error) => {
        console.log('This is the getAllRepos error' + error);
      },
      () => {
        this.getAllLanguages(repoNames);
      }
    );
  }

  private getAllLanguages(repoName: string[]): void {
    repoName.forEach((repo) => {
      this.githubService.getRepoLanguages(repo).subscribe(
        (response) => {
          try {
            const langsObj = { name: repo, languages: response };
            this.repoData[repo].languages.push(langsObj);
          } catch (error) {
            console.log(error);
          }
        },
        (error) => {
          console.warn('getAlllanguages error :' + error);
        },
        () => {
          // complete
          // this.repoData.forEach(repo => {
          // });
          // this.options.series = [
          //   {
          //     name: repo.name,
          //     type: 'pie',
          //     radius: [30, 110],
          //     roseType: 'area',
          //     data: this.repoData,
          //   },
          // ],
        }
      );
    });
  }
}
