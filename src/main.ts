import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RouterWrapperComponent } from './app/components/router-wrapper/router-wrapper.component';

bootstrapApplication(
  RouterWrapperComponent, 
  {...appConfig, 
    providers: [
      provideZoneChangeDetection(),      
      ...appConfig.providers
    ]})
  .catch((err) => console.error(err));


