import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fc-open-source',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenSourceComponent {

}
