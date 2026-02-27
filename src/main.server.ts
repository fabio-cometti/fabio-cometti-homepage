import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { RouterWrapperComponent } from './app/components/router-wrapper/router-wrapper.component';

const bootstrap = () => bootstrapApplication(RouterWrapperComponent, config);

export default bootstrap;
