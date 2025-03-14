import { AfterViewInit, Component, ComponentRef, Inject, OnInit, PLATFORM_ID, QueryList, Type, ViewChild, ViewChildren, ElementRef, ChangeDetectionStrategy, signal, viewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { ScrollManagerDirective } from './directives/scroll-manager.directive';
import { ScrollSectionDirective } from './directives/scroll-section.directive';
import { ScrollAnchorDirective } from './directives/scroll-anchor.directive';
import { BehaviorSubject, Observable, Subject, bufferCount, filter, fromEvent, map, merge, take, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Quote } from './models/quote';
import { WindowRefService } from './services/window-ref.service';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { SkillsComponent } from "./sections/skills/skills.component";
import { WorkExperiencesComponent } from "./sections/work-experiences/work-experiences.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { OpenSourceComponent } from "./sections/open-source/open-source.component";
import { InterestsComponent } from "./sections/interests/interests.component";
import { ContactsComponent } from "./sections/contacts/contacts.component";
import { ExtraContentComponent } from "./sections/extra-content/extra-content.component";
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'fc-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ScrollManagerDirective,
        ScrollSectionDirective,
        ScrollAnchorDirective,
        PlaceholderComponent,
        AboutMeComponent,
        SkillsComponent,
        WorkExperiencesComponent,
        ProjectsComponent,
        OpenSourceComponent,
        InterestsComponent,
        ContactsComponent,
        ExtraContentComponent
    ]
})
export class AppComponent implements AfterViewInit, OnInit {

  showMenu = signal(false);
  showScrollToTop = signal(false);
  faBars = signal(faBars);
  faArrowUp = signal(faArrowUp);
  isEdge = signal(false);

  private extraBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  extraEnabled = toSignal(this.extraBehaviorSubject.asObservable().pipe(
    bufferCount(3, 1),
    map(menuVoiceList => menuVoiceList.join('')),
    filter(menuVoiceListString => menuVoiceListString == '042'),
    map(menuVoiceListString => true),
    take(1)
  ));
  private menuSubject: Subject<void> = new Subject<void>();

  quote = toSignal(this.http.get<Quote[]>('/assets/quotes.json').pipe(
    map(quotes => quotes[Math.floor(Math.random() * quotes.length) % quotes.length])
  ));

  contactComponent?: ComponentRef<unknown>;

  top = viewChild.required<ElementRef>('top');

  constructor(private http: HttpClient, private windowRef: WindowRefService, @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.isEdge.set(this.windowRef.nativeWindow.navigator.userAgent.toLowerCase().indexOf('edg/') >= 0);
    }
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      const scrollEvent = fromEvent(this.windowRef.nativeWindow, 'scroll', { capture: true });
      merge(scrollEvent, this.menuSubject).pipe(take(1)).subscribe(_ => {
        this.loadIubendaScript();
      });

      scrollEvent.subscribe( _ => {
        var height = this.windowRef.nativeWindow.scrollY;
        var winheight = this.windowRef.nativeWindow.innerHeight;
        if(height  > winheight) {
          this.showScrollToTop.set(true);
        } else {
          this.showScrollToTop.set(false);
        }
      });
    }
  }

  loadIubendaScript() : void {
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", "https://cdn.iubenda.com/cs/iubenda_cs.js");
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", "async");
    scriptEle.setAttribute("charset", "UTF-8");
    document.body.appendChild(scriptEle);
  }

  toggleMenu(): void {
    this.showMenu.set(!this.showMenu());
    this.menuSubject.next();
  }

  closeMenu(menuVoice: number): void {
    this.showMenu.set(false);
    this.extraBehaviorSubject.next('' + menuVoice);
  }

  scrollToTop(): void {
    this.top().nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
