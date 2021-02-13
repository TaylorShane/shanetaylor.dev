import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Shane Taylor';
  currentRoute: UrlSegment[];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((route) => {
      this.currentRoute = route;
    });

    // Parent:  about
    // this.route.parent.url.subscribe((url) => console.log(url[0].path));

    // Current Path:  company
    this.route.url.subscribe((url) => {
      console.log('this.route.url[0].path', url[0].path);
      console.log('this.route.url', url);
    });

    // Data:  { title: 'Company' }
    this.route.data.subscribe((data) => {
      console.log('this.route.data', data);
    });

    // Siblings
    console.log('this.router.config', this.router.config);
  }
}
