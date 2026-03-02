import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideImageKitLoader } from '@angular/common';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: AppComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),    
    provideImageKitLoader('https://ik.imagekit.io/bzuos3bkr/'),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ]
};
