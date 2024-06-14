import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryItem } from 'src/app/models/gallery-item';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fc-interests',
  standalone: true,
  imports: [
    CommonModule,
    ObserveVisibilityDirective,
    ScrollSectionDirective,
    AboutBlockComponent,
    FontAwesomeModule,
    GalleryComponent
  ],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterestsComponent {

  gallery = toSignal(this.http.get<GalleryItem[]>('/assets/gallery2.json'), { initialValue: []});

  constructor(private title: Title, private http: HttpClient) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Interests');
  }
}
