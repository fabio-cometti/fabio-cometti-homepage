import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fc-router-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class RouterWrapperComponent {

}
