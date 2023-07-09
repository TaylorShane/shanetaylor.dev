import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'Shane Taylor';
  currentRoute: UrlSegment[];

  private readonly destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.pipe(takeUntil(this.destroy$)).subscribe((route) => {
      this.currentRoute = route;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
