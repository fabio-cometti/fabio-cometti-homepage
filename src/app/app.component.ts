import { AfterViewInit, Component, QueryList, Type, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicSection } from './directives/dynamic-section.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ScrollManagerDirective } from './directives/scroll-manager.directive';
import { ScrollSectionDirective } from './directives/scroll-section.directive';
import { ScrollAnchorDirective } from './directives/scroll-anchor.directive';
import { timer } from 'rxjs';


@Component({
  selector: 'fc-root',
  standalone: true,
  imports: [CommonModule, DynamicSection, FontAwesomeModule, ScrollManagerDirective, ScrollSectionDirective, ScrollAnchorDirective],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  showMenu: boolean = false;
  faBars = faBars;

  @ViewChildren(DynamicSection) sectionHosts!:  QueryList<DynamicSection>;

  async ngAfterViewInit() {
    //timer(3000).subscribe( _ => this.loadComponents());
    await this.loadComponents();
  }

  async loadComponents() {

    await import('./sections/about-me/about-me.component').then(({ AboutMeComponent}) => {
      this.initComponent(0, AboutMeComponent);
    });

    await import('./sections/skills/skills.component').then(({ SkillsComponent}) => {
      this.initComponent(1, SkillsComponent);
    });

    await import('./sections/work-experiences/work-experiences.component').then(({ WorkExperiencesComponent}) => {
      this.initComponent(2, WorkExperiencesComponent);
    });

    await import('./sections/projects/projects.component').then(({ ProjectsComponent }) => {
      this.initComponent(3, ProjectsComponent );
    });

    await import('./sections/open-source/open-source.component').then(({ OpenSourceComponent }) => {
      this.initComponent(4, OpenSourceComponent);
    });

    await import('./sections/education/education.component').then(({ EducationComponent }) => {
      this.initComponent(5, EducationComponent);
    });

    await import('./sections/certifications/certifications.component').then(({ CertificationsComponent }) => {
      this.initComponent(6, CertificationsComponent);
    });

    await import('./sections/interests/interests.component').then(({ InterestsComponent }) => {
      this.initComponent(7, InterestsComponent);
    });

    await import('./sections/contacts/contacts.component').then(({ ContactsComponent }) => {
      this.initComponent(8, ContactsComponent);
    });
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  closeMenu(): void {
    this.showMenu = false;
  }

  private initComponent(index: number, type: Type<unknown>) : void {
    const viewContainerRef = this.sectionHosts.get(index)!.viewContainerRef;
      viewContainerRef.clear();
      const cRef = viewContainerRef.createComponent(type);
  }
}
