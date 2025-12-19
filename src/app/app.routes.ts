import { Routes } from '@angular/router';
import { GraphyPrivacyTermsComponent } from './app-specific/graphy/privacy-terms/graphy-privacy-terms.component';
import { GraphyUserGuideComponent } from './app-specific/graphy/user-guide/graphy-user-guide.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'graphy-privacy-terms', component: GraphyPrivacyTermsComponent },
  { path: 'graphy-user-guide', component: GraphyUserGuideComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
