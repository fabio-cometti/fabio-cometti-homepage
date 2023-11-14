import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
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
  private _isVisible: boolean = false;

  @Input('percent') percent: number = 0;
  @Input('label') label: string = '';
  @Input('isVisible') public set isVisible(visible: boolean) {
    if(isPlatformBrowser(this.platformId)) {
      this._isVisible = visible || this.windowRef.nativeWindow.navigator.userAgent.toLowerCase().indexOf('edg/') >= 0;
    }
    if(this._isVisible) {
      timer(500).pipe(take(1)).subscribe(_ => {
        this.offset = this.circumference - (this.percent * 3.1415927);
        this.cd.detectChanges();
      });
    }
  }
  offset: number = 314.15927;
  circumference = 314.15927;

  constructor(private cd: ChangeDetectorRef, private windowRef: WindowRefService, @Inject(PLATFORM_ID) private platformId: any) {
  }
}
