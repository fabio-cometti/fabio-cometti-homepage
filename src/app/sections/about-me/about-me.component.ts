import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { Title } from '@angular/platform-browser';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { Observable, switchMap, timer } from 'rxjs';
import { GalleryItem } from 'src/app/models/gallery-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fc-about-me',
  standalone: true,
  imports: [
    CommonModule,
    AboutBlockComponent,
    ScrollSectionDirective,
    ObserveVisibilityDirective,
    GalleryComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrls: ['about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {

  gallery$: Observable<GalleryItem[]>;

  constructor(private title: Title, private http: HttpClient) {
    this.gallery$ = timer(4000).pipe(switchMap(() =>
      this.http.get<GalleryItem[]>('/assets/gallery1.json')
    ))
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - About me');
  }
}
