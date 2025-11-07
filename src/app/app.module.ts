import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { NgxEchartsModule } from 'ngx-echarts';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsComponent } from './shared/charts/charts.component';
import { ExampleComponent } from './work-examples/example/example.component';
import { GraphyPrivacyTermsComponent } from './app-specific/graphy/privacy-terms/graphy-privacy-terms.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { GraphyUserGuideComponent } from './app-specific/graphy/user-guide/graphy-user-guide.component';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        AppRoutingModule,
        FooterComponent,
        NavbarComponent,
        WhoComponent,
        WhatComponent,
        WorkExamplesComponent,
        ChartsComponent,
        ExampleComponent,
        GraphyPrivacyTermsComponent,
        MainComponent,
        PageNotFoundComponent,
        GraphyUserGuideComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule {}
