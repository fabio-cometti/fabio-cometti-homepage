import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fc-placeholder',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="outer-placeholder"><div class="inner-placeholder blink"><fa-icon [icon]="faImage"></fa-icon></div></div>
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
  faImage = faImage;
}
