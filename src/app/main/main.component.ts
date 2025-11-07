import { Component } from '@angular/core';
import { WhoComponent } from '../who/who.component';
import { WhatComponent } from '../what/what.component';
import { WorkExamplesComponent } from '../work-examples/work-examples.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'st-main',
    templateUrl: './main.component.html',
    imports: [WhoComponent, WhatComponent, WorkExamplesComponent, FooterComponent]
})
export class MainComponent {}
