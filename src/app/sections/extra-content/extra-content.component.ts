import { ChangeDetectionStrategy, Component, ViewChild, signal, viewChild } from '@angular/core';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFilm, faGift, faGraduationCap, faShieldHalved, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import { RaptorizeComponent } from 'src/app/components/raptorize/raptorize.component';
import { GalleryItem } from 'src/app/models/gallery-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fc-extra-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ObserveVisibilityDirective,
    ScrollSectionDirective,
    AboutBlockComponent,
    FaIconComponent,
    RaptorizeComponent,
    GalleryComponent
],
  templateUrl: './extra-content.component.html',
  styleUrls: ['./extra-content.component.scss']  
})
export class ExtraContentComponent {

  faGift = signal(faGift);
  faGraduationCap = signal(faGraduationCap);
  faFilm = signal(faFilm);
  faStopwatch = signal(faStopwatch);
  faShieldHalved = signal(faShieldHalved);
  raptorIsRunning =  signal(false);  

  raptor = viewChild.required<RaptorizeComponent>('raptor');

  gallery = toSignal(this.http.get<GalleryItem[]>('/assets/gallery7.json'), {initialValue: []});

  constructor(private title: Title, private http: HttpClient) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Extra contents');
  }

  raptorize(event: Event): void {
    event.preventDefault();
    this.roar();
    this.raptorIsRunning.set(false);

    requestAnimationFrame(() => {
      this.raptorIsRunning.set(true);
    });
  }

  public roar(){
    this.raptor().roar();
  }
}
