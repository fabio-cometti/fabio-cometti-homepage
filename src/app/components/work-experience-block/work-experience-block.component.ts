import { Component, Input } from '@angular/core';
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
  @Input('year') year: string = '';
  @Input('company') company: string = '';
  @Input('description') description: string = '';

  isHide: boolean = true; 

  onVisible(): void {
    this.isHide = false;
  }
}
