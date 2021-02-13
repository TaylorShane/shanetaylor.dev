import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { GraphyPrivacyTermsComponent } from './app-specific/graphy/privacy-terms/graphy-privacy-terms.component';
import { ThgPrivacyTermsComponent } from './app-specific/thg/privacy-terms/thg-privacy-terms.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'graphy-privacy-terms', component: GraphyPrivacyTermsComponent },
  { path: 'thg-privacy-terms', component: ThgPrivacyTermsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
