import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsComponent } from './shared/charts/charts.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    WhoComponent,
    WhatComponent,
    WorkExamplesComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
