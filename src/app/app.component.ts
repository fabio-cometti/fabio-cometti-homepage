import { AfterViewInit, Component, ComponentRef, Inject, OnInit, PLATFORM_ID, QueryList, Type, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { DynamicSection } from './directives/dynamic-section.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { ScrollManagerDirective } from './directives/scroll-manager.directive';
import { ScrollSectionDirective } from './directives/scroll-section.directive';
import { ScrollAnchorDirective } from './directives/scroll-anchor.directive';
import { BehaviorSubject, Observable, Subject, bufferCount, filter, fromEvent, map, merge, take, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Quote } from './models/quote';
import { WindowRefService } from './services/window-ref.service';

@Component({
  selector: 'fc-root',
  standalone: true,
  imports: [
    CommonModule,
    DynamicSection,
    FontAwesomeModule,
    ScrollManagerDirective,
    ScrollSectionDirective,
    ScrollAnchorDirective,
    NgOptimizedImage
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {

  showMenu: boolean = false;
  showScrollToTop = false;
  faBars = faBars;
  faArrowUp = faArrowUp;
  isEdge = false;

  private extraBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  extraEnabled$: Observable<boolean>;
  private menuSubject: Subject<void> = new Subject<void>();

  quote$: Observable<Quote>;

  contactComponent?: ComponentRef<unknown>;

  @ViewChildren(DynamicSection) sectionHosts!:  QueryList<DynamicSection>;
  @ViewChild('top') top!: ElementRef;

  constructor(private http: HttpClient, private windowRef: WindowRefService, @Inject(PLATFORM_ID) private platformId: any) {
    this.extraEnabled$ = this.extraBehaviorSubject.asObservable().pipe(
      bufferCount(3, 1),
      map(menuVoiceList => menuVoiceList.join('')),
      filter(menuVoiceListString => menuVoiceListString == '042'),
      map(menuVoiceListString => true),
      take(1)
    );

    this.extraEnabled$.subscribe( _ => {
      import('./sections/extra-content/extra-content.component').then(({ ExtraContentComponent }) => {
        this.initComponent(6, ExtraContentComponent);
        this.contactComponent?.setInput('hideExtraContentHint', true);
      });
    });

    this.quote$ = this.http.get<Quote[]>('/assets/quotes.json').pipe(
      map(quotes => quotes[Math.floor(Math.random() * quotes.length) % quotes.length])
    )
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.isEdge = this.windowRef.nativeWindow.navigator.userAgent.toLowerCase().indexOf('edg/') >= 0;
    }
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      const scrollEvent = fromEvent(this.windowRef.nativeWindow, 'scroll', { capture: true });
      merge(scrollEvent, this.menuSubject).pipe(take(1)).subscribe(_ => {
        this.loadIubendaScript();
        this.loadComponents();
      });

      scrollEvent.subscribe( _ => {
        var height = this.windowRef.nativeWindow.scrollY;
        var winheight = this.windowRef.nativeWindow.innerHeight;
        if(height  > winheight) {
          this.showScrollToTop = true;
        } else {
          this.showScrollToTop = false;
        }
      });
    }
  }

  loadComponents() {

    import('./sections/about-me/about-me.component').then(({ AboutMeComponent}) => {
      this.initComponent(0, AboutMeComponent);
    });

    import('./sections/skills/skills.component').then(({ SkillsComponent}) => {
      this.initComponent(1, SkillsComponent);
    });

    import('./sections/work-experiences/work-experiences.component').then(({ WorkExperiencesComponent}) => {
      this.initComponent(2, WorkExperiencesComponent);
    });

    import('./sections/projects/projects.component').then(({ ProjectsComponent }) => {
      this.initComponent(3, ProjectsComponent );
    });

    import('./sections/open-source/open-source.component').then(({ OpenSourceComponent }) => {
      this.initComponent(4, OpenSourceComponent);
    });

    import('./sections/interests/interests.component').then(({ InterestsComponent }) => {
      this.initComponent(5, InterestsComponent);
    });

    import('./sections/contacts/contacts.component').then(({ ContactsComponent }) => {
      this.contactComponent = this.initComponent(7, ContactsComponent);
    });
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
    this.showMenu = !this.showMenu;
    this.menuSubject.next();
  }

  closeMenu(menuVoice: number): void {
    this.showMenu = false;
    this.extraBehaviorSubject.next('' + menuVoice);
  }

  scrollToTop(): void {
    this.top.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }

  private initComponent(index: number, type: Type<unknown>) : ComponentRef<unknown> {
    const viewContainerRef = this.sectionHosts.get(index)!.viewContainerRef;
      viewContainerRef.clear();
      const cRef = viewContainerRef.createComponent(type);
      return cRef;
  }
}
