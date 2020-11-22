import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WhoComponent,
    WhatComponent,
    WorkExamplesComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, CarouselModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
