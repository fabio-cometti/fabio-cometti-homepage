import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fc-placeholder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FaIconComponent],
  template: `
    <div class="outer-placeholder"><div class="inner-placeholder blink"><fa-icon [icon]="faImage()"></fa-icon></div></div>
  `,
  styles: `
    .outer-placeholder {
      width: 100%;
      height: 20em;
      text-align: center;

      .inner-placeholder{
        display: inline-block;
        width: 20em;
        color: var(--accent);
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
export class PlaceholderComponent {
  faImage = signal(faImage);
}
