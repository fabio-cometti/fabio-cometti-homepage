import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { RouterWrapperComponent } from './app/components/router-wrapper/router-wrapper.component';

//const bootstrap = () => bootstrapApplication(AppComponent, config);
const bootstrap = () => bootstrapApplication(RouterWrapperComponent, config);

export default bootstrap;
