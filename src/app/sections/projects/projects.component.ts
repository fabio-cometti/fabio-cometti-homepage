import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { Title } from '@angular/platform-browser';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';

@Component({
  selector: 'fc-projects',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective, AboutBlockComponent, ScrollSectionDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {

  constructor(private title: Title) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Projects');
  }
}
