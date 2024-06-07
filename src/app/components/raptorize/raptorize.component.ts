import { ChangeDetectionStrategy, Component, Input, ViewChild, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, delay, of, take } from 'rxjs';

@Component({
  selector: 'fc-raptorize',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  templateUrl: './raptorize.component.html',
  styleUrls: ['./raptorize.component.scss']
})
export class RaptorizeComponent {

   audio = viewChild<any>('audio');

  loaded = signal(false);

  ngOnInit() {
    of(1).pipe(delay(3000), take(1)).subscribe(() => this.loaded.set(true));
  }

  public roar() {
    this.audio()?.nativeElement.play();
  }
}
