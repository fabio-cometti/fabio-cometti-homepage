import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

function _window(): any {  
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {
  get nativeWindow(): any {
    if(isPlatformBrowser(this.platformId)){
      return _window();
    }
    return {};
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  } 
}
