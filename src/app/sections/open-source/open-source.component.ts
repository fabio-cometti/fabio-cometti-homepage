import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { GalleryItem } from 'src/app/models/gallery-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';

@Component({
  selector: 'fc-open-source',
  standalone: true,
  imports: [
    CommonModule,
    ObserveVisibilityDirective,
    AboutBlockComponent,
    ScrollSectionDirective,
    FontAwesomeModule,
    GalleryComponent
  ],
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenSourceComponent {

  faGithub = faGithub;

  gallery$: Observable<GalleryItem[]>;

  constructor(private title: Title, private http: HttpClient) {
    this.gallery$ = this.http.get<GalleryItem[]>('/assets/gallery6.json');
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Open source');
  }
}
