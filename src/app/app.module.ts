import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { GraphyPrivacyTermsComponent } from './app-specific/graphy/privacy-terms/graphy-privacy-terms.component';
import { GraphyUserGuideComponent } from './app-specific/graphy/user-guide/graphy-user-guide.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartsComponent } from './shared/charts/charts.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { WhatComponent } from './what/what.component';
import { WhoComponent } from './who/who.component';
import { ExampleComponent } from './work-examples/example/example.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';

@NgModule({
  imports: [
    AppComponent,
    AppRoutingModule,
    BrowserModule,
    ChartsComponent,
    ExampleComponent,
    FooterComponent,
    GraphyPrivacyTermsComponent,
    GraphyUserGuideComponent,
    MainComponent,
    NavbarComponent,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    PageNotFoundComponent,
    WhatComponent,
    WhoComponent,
    WorkExamplesComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {}
