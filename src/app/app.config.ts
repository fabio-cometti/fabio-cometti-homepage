import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations} from '@angular/platform-browser/animations';
import { provideImageKitLoader } from '@angular/common';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { provideClientHydration } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: AppComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideAnimations(),
    provideImageKitLoader('https://ik.imagekit.io/bzuos3bkr/'),
    provideRouter(routes),
    provideClientHydration(),
  ]
};
