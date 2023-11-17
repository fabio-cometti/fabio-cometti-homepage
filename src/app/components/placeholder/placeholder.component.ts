import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fc-placeholder',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div><fa-icon [icon]="faImage"></fa-icon></div>
  `,
  styles: `
    div {
      width: 100%;
      height: 4em;
      text-align: center;
    }
  `
})
export class PlaceholderComponent {
  faImage = faImage;
}
