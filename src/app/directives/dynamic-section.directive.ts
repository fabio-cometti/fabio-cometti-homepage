import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sectionHost]',
  standalone: true
})
export class DynamicSection {
  constructor(public viewContainerRef: ViewContainerRef) { }
}