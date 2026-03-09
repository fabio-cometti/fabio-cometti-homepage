import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { RouterWrapperComponent } from './app/components/router-wrapper/router-wrapper.component';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(RouterWrapperComponent, config, context);

export default bootstrap;
