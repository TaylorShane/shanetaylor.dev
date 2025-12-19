import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { provideEchartsCore } from 'ngx-echarts';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/app.routes';

const appRoutes: Routes = routes;

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      appRoutes,
      withHashLocation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled'
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideEchartsCore({ echarts: () => import('echarts') }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(CommonModule)
  ]
}).catch((err) => console.error(err));
