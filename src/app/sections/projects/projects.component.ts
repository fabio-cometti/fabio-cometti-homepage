import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { Title } from '@angular/platform-browser';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { GalleryItem } from 'src/app/models/gallery-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fc-projects',
  standalone: true,
  imports: [
    CommonModule,
    ObserveVisibilityDirective,
    AboutBlockComponent,
    ScrollSectionDirective,
    GalleryComponent
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {

  gallery = toSignal(this.http.get<GalleryItem[]>('/assets/gallery5.json'), { initialValue: []})

  constructor(private title: Title, private http: HttpClient) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Projects');
  }
}
