import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'fc-certifications',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective, ScrollSectionDirective, AboutBlockComponent, FontAwesomeModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsComponent {

  faClock = faClock;

  constructor(private title: Title) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Certifications');
  }
}
