import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { config } from '@fortawesome/fontawesome-svg-core'
import { Routes } from '@angular/router';
import { RouterWrapperComponent } from './app/components/router-wrapper/router-wrapper.component';

config.autoAddCss = false;

bootstrapApplication(RouterWrapperComponent, appConfig)
  .catch((err) => console.error(err));
