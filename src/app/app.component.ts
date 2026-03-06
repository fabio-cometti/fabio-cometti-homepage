import { AfterViewInit, Component, ComponentRef, Inject, OnInit, PLATFORM_ID, ElementRef, ChangeDetectionStrategy, signal, viewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollManagerDirective } from './directives/scroll-manager.directive';
import { ScrollSectionDirective } from './directives/scroll-section.directive';
import { ScrollAnchorDirective } from './directives/scroll-anchor.directive';
import { Subject, fromEvent, map, merge, switchMap, take } from 'rxjs';
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
import { ExtraService } from './services/extra.service';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
    selector: 'fc-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [
        CommonModule,        
        ScrollManagerDirective,
        ScrollSectionDirective,        
        PlaceholderComponent,
        AboutMeComponent,
        SkillsComponent,
        WorkExperiencesComponent,
        ProjectsComponent,
        OpenSourceComponent,
        InterestsComponent,
        ContactsComponent,
        ExtraContentComponent,
        NavigationComponent
    ]
})
export class AppComponent implements AfterViewInit, OnInit {

  
  showScrollToTop = signal(false);  
  isEdge = signal(false); 
  quote = signal<Quote | undefined>(undefined);
  menuOpenSubject = new Subject<void>();
  
  top = viewChild.required<ElementRef>('top');

  constructor(public extraService: ExtraService, private http: HttpClient, private windowRef: WindowRefService, @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.isEdge.set(this.windowRef.nativeWindow.navigator.userAgent.toLowerCase().indexOf('edg/') >= 0);
    }
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      const scrollEvent = fromEvent(this.windowRef.nativeWindow, 'scroll', { capture: true });
      merge(scrollEvent, this.menuOpenSubject).pipe(take(1)).subscribe(_ => {
        this.loadIubendaScript();
      });

      scrollEvent.pipe(
        take(1),
        switchMap(val => this.http.get<Quote[]>('/assets/quotes.json')),
        map(quotes => quotes[Math.floor(Math.random() * quotes.length) % quotes.length])
      ).subscribe(q => {
        this.quote.set(q);
      });

      scrollEvent.subscribe( _ => {
        if(isPlatformBrowser(this.platformId)) {
          var height = this.windowRef.nativeWindow.scrollY;
          var winheight = this.windowRef.nativeWindow.innerHeight;
          if(height  > winheight) {
            this.showScrollToTop.set(true);
          } else {
            this.showScrollToTop.set(false);
          }
        }
      });
    }
  }

  loadIubendaScript() : void {
    if(isPlatformBrowser(this.platformId)) {
      let scriptEle = document.createElement("script");
      scriptEle.setAttribute("src", "https://cdn.iubenda.com/cs/iubenda_cs.js");
      scriptEle.setAttribute("type", "text/javascript");
      scriptEle.setAttribute("async", "async");
      scriptEle.setAttribute("charset", "UTF-8");
      document.body.appendChild(scriptEle);
    }
  }  

  scrollToTop(): void {
    this.top().nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }

  onMenuOpen(): void {
    this.menuOpenSubject.next();
  }
}
