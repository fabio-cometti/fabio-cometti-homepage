import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';

@Component({
  selector: 'fc-about-me',
  standalone: true,
  imports: [CommonModule, AboutBlockComponent, ScrollSectionDirective],
  templateUrl: './about-me.component.html',
  styleUrls: ['about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {
  isVisible: boolean = false;

  onVisible(event: HTMLElement): void {
    this.isVisible = true;
  }
}
