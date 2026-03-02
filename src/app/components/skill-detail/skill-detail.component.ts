import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, PLATFORM_ID, computed, effect, input, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { take, timer } from 'rxjs';
import { WindowRefService } from 'src/app/services/window-ref.service';

@Component({
  selector: 'fc-skill-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillDetailComponent {
  percent = input.required<number>();
  label = input('');
  isVisible = input.required<boolean>();

  isReallyVisible = computed(() => this.isVisible() || this.windowRef.nativeWindow.navigator.userAgent.toLowerCase().indexOf('edg/') >= 0);

  startAnimation = effect(() => {
    if(this.isReallyVisible()) {
      timer(800).pipe(take(1)).subscribe(_ => {
        this.offset.set(this.circumference() - (this.percent() * 3.1415927));
      });
    }
  });

  offset = signal(314.15927);
  circumference = signal(314.15927);

  constructor(private windowRef: WindowRefService) {
  }
}
