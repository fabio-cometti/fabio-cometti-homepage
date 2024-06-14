import { ChangeDetectionStrategy, Component, ViewChild, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilm, faGift, faGraduationCap, faShieldHalved, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import { RaptorizeComponent } from 'src/app/components/raptorize/raptorize.component';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
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
    CommonModule,
    ObserveVisibilityDirective,
    ScrollSectionDirective,
    AboutBlockComponent,
    FontAwesomeModule,
    RaptorizeComponent,
    GalleryComponent
  ],
  templateUrl: './extra-content.component.html',
  styleUrls: ['./extra-content.component.scss'],
  animations: [
    trigger('runState', [
      state('stopped', style({
        right: '-50%',
        bottom: '-100%',
        visibility: 'hidden'
      })),
      state('running', style({
        right: '100%',
        bottom: '-5%',
        visibility: 'visible'
      })),
      transition('stopped => running', animate('2000ms ease-in', keyframes([
        style({right: '-50%', bottom: '-100%', visibility: 'visible', offset: 0}),
        style({right: '-50%', bottom: '0', offset: 0.1}),
        style({right: '-50%', bottom: '-5%', offset: 0.2}),
        style({right: '100%', bottom: '-5%', offset: 1})
      ])))
    ])
  ]
})
export class ExtraContentComponent {

  faGift = signal(faGift);
  faGraduationCap = signal(faGraduationCap);
  faFilm = signal(faFilm);
  faStopwatch = signal(faStopwatch);
  faShieldHalved = signal(faShieldHalved);
  raptorState =  signal('stopped');

  raptor = viewChild.required<RaptorizeComponent>('raptor');

  gallery = toSignal(this.http.get<GalleryItem[]>('/assets/gallery7.json'), {initialValue: []});

  constructor(private title: Title, private http: HttpClient) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Extra contents');
  }

  raptorize(event: Event): void {
    event.preventDefault();
    this.raptorState.set('running');
  }

  public resetRaptor(event: any){
    this.raptorState.set('stopped');
  }

  public roar(event: any){
    this.raptor().roar();
  }
}
