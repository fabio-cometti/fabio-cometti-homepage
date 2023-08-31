import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'fc-open-source',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective, AboutBlockComponent, ScrollSectionDirective, FontAwesomeModule],
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenSourceComponent {

  faGithub = faGithub;

  constructor(private title: Title) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Open source');
  }
}
