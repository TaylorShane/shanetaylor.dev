import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    WhoComponent,
    WhatComponent,
    WorkExamplesComponent,
  ],
  imports: [BrowserModule, CarouselModule.forRoot(), FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
