import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';

@Component({
  selector: 'fc-about-block',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective],
  templateUrl: './about-block.component.html',
  styleUrls: ['./about-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutBlockComponent {
  @Input('position') position: 'left' | 'right' = 'left';
  @Input('large') large: boolean = false;

  @HostBinding('class') display = 'block-component';
}
