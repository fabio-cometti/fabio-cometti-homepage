import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { AboutBlockComponent } from 'src/app/components/about-block/about-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faFilm, faGift, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import { RaptorizeComponent } from 'src/app/components/raptorize/raptorize.component';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditsComponent } from 'src/app/components/credits/credits.component';
import { GalleryItem } from 'src/app/models/gallery-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';

@Component({
  selector: 'fc-extra-content',
  standalone: true,
  imports: [
    CommonModule,
    ObserveVisibilityDirective,
    ScrollSectionDirective,
    AboutBlockComponent,
    FontAwesomeModule,
    RaptorizeComponent,
    CreditsComponent,
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

  faGift = faGift;
  faGraduationCap = faGraduationCap;
  faFilm = faFilm;
  raptorState =  'stopped';
  showCredits = false;

  @ViewChild('raptor') raptor?: RaptorizeComponent;

  gallery$: Observable<GalleryItem[]>;

  constructor(private title: Title, private http: HttpClient) {
    this.gallery$ = this.http.get<GalleryItem[]>('/assets/gallery7.json');
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Extra contents');
  }

  raptorize(event: Event): void {
    event.preventDefault();
    this.raptorState = 'running';
  }

  public resetRaptor(event: any){
    this.raptorState = 'stopped';
  }

  public roar(event: any){
    this.raptor?.roar();
  }

  credits(event: Event): void {
    event.preventDefault();
    this.showCredits = true;
  }

  closeCredits(): void {
    this.showCredits = false;
  }
}
