import { Component, Input, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';

@Component({
  selector: 'fc-work-experience-block',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective],
  templateUrl: './work-experience-block.component.html',
  styleUrls: ['./work-experience-block.component.scss']
})
export class WorkExperienceBlockComponent {
  year = input<string>('');
  company = input<string>('');
  description = input<string>('');

  isHide = signal(true);

  onVisible(): void {
    this.isHide.set(false);
  }
}
