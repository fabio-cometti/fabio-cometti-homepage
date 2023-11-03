import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fc-router-wrapper',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class RouterWrapperComponent {

}
