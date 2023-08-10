import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGroup } from 'src/app/models/skills';
import { SkillDetailComponent } from '../skill-detail/skill-detail.component';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';

@Component({
  selector: 'fc-skill-group',
  standalone: true,
  imports: [CommonModule, SkillDetailComponent, ObserveVisibilityDirective],
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillGroupComponent {
  @Input('group') group!: SkillGroup;
  @HostBinding('class') display = 'block-component';

  isHide: boolean = true;  

  onVisible(): void {
    this.isHide = false;
  }
}
