import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'fc-extra-content',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective, ScrollSectionDirective, AboutBlockComponent, FontAwesomeModule],
  templateUrl: './extra-content.component.html',
  styleUrls: ['./extra-content.component.scss']
})
export class ExtraContentComponent {

  faClock = faClock;

  constructor(private title: Title) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Extra contents');
  }
}
