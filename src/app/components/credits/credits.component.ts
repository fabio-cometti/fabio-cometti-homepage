import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild, output, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, take } from 'rxjs';

@Component({
  selector: 'fc-credits',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditsComponent {
  faClose = signal(faClose);
  private sound$ = new Subject<boolean>();

  audio = viewChild<any>('audio');
  onClose = output<void>();

  ngAfterViewInit() {
    this.sound$.pipe(take(1)).subscribe(_ => this.audio().nativeElement.play());
    this.sound$.next(true);
  }

  hideCredits(): void {
    this.onClose.emit();
  }
}
