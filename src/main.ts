import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RouterWrapperComponent } from './app/components/router-wrapper/router-wrapper.component';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

bootstrapApplication(
  RouterWrapperComponent, 
  {...appConfig, 
    providers: [         
      ...appConfig.providers
    ]})
  .catch((err) => console.error(err));


