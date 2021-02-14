import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { GraphyPrivacyTermsComponent } from './app-specific/graphy/privacy-terms/graphy-privacy-terms.component';
import { GraphyUserGuideComponent } from './app-specific/graphy/user-guide/user-guide.component';
import { ThgPrivacyTermsComponent } from './app-specific/thg/privacy-terms/thg-privacy-terms.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'graphy-privacy-terms', component: GraphyPrivacyTermsComponent },
  { path: 'graphy-user-guide', component: GraphyUserGuideComponent },
  { path: 'thg-privacy-terms', component: ThgPrivacyTermsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
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
