import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { take, timer } from 'rxjs';

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
    this._isVisible = visible;
    if(this._isVisible) {
      timer(500).pipe(take(1)).subscribe(_ => {
        this.offset = this.circumference - (this.percent * 3.1415927);
        this.cd.detectChanges();
      });
    }
  }
  offset: number = 314.15927;
  circumference = 314.15927;

  constructor(private cd: ChangeDetectorRef) { 
  }
}
