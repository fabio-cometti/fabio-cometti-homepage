import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations} from '@angular/platform-browser/animations';
import { provideImageKitLoader } from '@angular/common';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideImageKitLoader('https://ik.imagekit.io/bzuos3bkr/'),
    provideRouter(routes),
  ]
};
