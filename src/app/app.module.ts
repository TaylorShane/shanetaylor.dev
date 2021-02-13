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
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent } from './work-examples/example/example.component';
import { GraphyPrivacyTermsComponent } from './app-specific/graphy/privacy-terms/graphy-privacy-terms.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ThgPrivacyTermsComponent } from './app-specific/thg/privacy-terms/thg-privacy-terms.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    WhoComponent,
    WhatComponent,
    WorkExamplesComponent,
    ChartsComponent,
    ExampleComponent,
    GraphyPrivacyTermsComponent,
    MainComponent,
    ThgPrivacyTermsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    AppRoutingModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
