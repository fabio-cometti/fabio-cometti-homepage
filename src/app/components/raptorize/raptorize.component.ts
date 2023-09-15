import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, delay, of, take } from 'rxjs';

@Component({
  selector: 'fc-raptorize',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './raptorize.component.html',
  styleUrls: ['./raptorize.component.scss']
})
export class RaptorizeComponent {

  @ViewChild('audio') private audio?: any;

  loaded = false;

  constructor() {

  }

  ngOnInit() {
    of(1).pipe(delay(3000), take(1)).subscribe(() => this.loaded = true);
  }

  public roar() {
    this.audio?.nativeElement.play();
  }
}
