import { ChangeDetectionStrategy, Component, HostBinding, Input, computed, input, signal } from '@angular/core';
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

  position = input.required<'left' | 'right'>();
  isLeft = computed(() => this.position() === 'left');
  isRight = computed(() => this.position() === 'right');
  large = input<boolean>(false);
  isHide = signal({isHide: true});

  @HostBinding('class') display = 'block-component';
}
