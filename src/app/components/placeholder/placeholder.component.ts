import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fc-placeholder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,  
  template: `
    <div class="outer-placeholder"><div class="inner-placeholder blink"><span class="image-placeholder">🖼️</span></div></div>
  `,  
  styles: `
    .outer-placeholder {
      width: 100%;
      height: 20em;
      text-align: center;

      .image-placeholder { 
        filter: grayscale(100%); 
        font-size: 18em;
        line-height: 1em;
      }

      .blink {
        animation: blink 1s linear infinite;
      }
      @keyframes blink{
        0%{opacity: 0;}
        50%{opacity: .5;}
        100%{opacity: 1;}
      }
    }
  `
})
export class PlaceholderComponent {}
