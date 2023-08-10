import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fc-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterestsComponent {

}
