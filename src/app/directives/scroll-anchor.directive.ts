import { Directive, HostListener, Input, input, signal } from '@angular/core';
import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[appScrollAnchor]',
  standalone: true
})
export class ScrollAnchorDirective {
  appScrollAnchor = input.required<string | number>();

  constructor(private manager: ScrollManagerDirective) {}

  @HostListener('click')
  scroll() {
    this.manager.scroll(this.appScrollAnchor());
  }
}