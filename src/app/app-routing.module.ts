import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphyPrivacyComponent } from './app-specific/graphy/privacy/graphy-privacy.component';
import { GraphyTermsComponent } from './app-specific/graphy/terms/graphy-terms.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'graphy-privacy', component: GraphyPrivacyComponent },
  { path: 'graphy-terms', component: GraphyTermsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
