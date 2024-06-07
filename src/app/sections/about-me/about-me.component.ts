import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { Title } from '@angular/platform-browser';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { Observable, map, switchMap, timer } from 'rxjs';
import { GalleryItem } from 'src/app/models/gallery-item';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

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

  gallery = toSignal(timer(0).pipe(switchMap(() =>
    this.http.get<GalleryItem[]>('/assets/gallery1.json')
  )), { initialValue: []});

  constructor(private title: Title, private http: HttpClient) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - About me');
  }
}
