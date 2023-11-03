import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { config } from '@fortawesome/fontawesome-svg-core'
import { RouterWrapperComponent } from './app/components/router-wrapper/router-wrapper.component';

config.autoAddCss = false;

bootstrapApplication(RouterWrapperComponent, appConfig)
  .catch((err) => console.error(err));
