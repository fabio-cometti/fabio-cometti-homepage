import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations} from '@angular/platform-browser/animations';
import { provideImageKitLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideAnimations(), provideImageKitLoader('https://ik.imagekit.io/bzuos3bkr/')]
};
