import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillDetailComponent } from 'src/app/components/skill-detail/skill-detail.component';
import { SkillGroup } from 'src/app/models/skills';
import { SkillGroupComponent } from 'src/app/components/skill-group/skill-group.component';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { Title } from '@angular/platform-browser';
import { GalleryItem } from 'src/app/models/gallery-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fc-skills',
  standalone: true,
  imports: [
    CommonModule,
    SkillGroupComponent,
    ObserveVisibilityDirective,
    ScrollSectionDirective,
    GalleryComponent
  ],
  templateUrl: 'skills.component.html',
  styleUrls: ['skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skills = signal<SkillGroup[]>([
    {
      "name": "Architectural knowledge",
      "skills": [
        { "name": "Design patterns", "percent": 90},
        { "name": "Clean architecture", "percent": 90},
        { "name": "Layered architectures", "percent": 90},
        { "name": "REST", "percent": 90},
        { "name": "Microservices", "percent": 70},
        { "name": "Vertical slice", "percent": 70},
        { "name": "SOAP", "percent": 70},
        { "name": "Microfrontend", "percent": 40},
      ]
    },
    {
      "name": "Cloud platforms",
      "skills": [
        { "name": "Azure", "percent": 70},
        { "name": "AWS", "percent": 50},
        { "name": "Google Cloud", "percent": 30},
      ]
    },
    {
      "name": "Development platforms",
      "skills": [
        { "name": ".NET", "percent": 90},
        { "name": "Node.js", "percent": 60},
        { "name": "Java", "percent": 60}
      ]
    },
    {
      "name": "Languages",
      "skills": [
        { "name": "C#", "percent": 90},
        { "name": "HTML 5", "percent": 90},
        { "name": "CSS3", "percent": 90},
        { "name": "Typescript", "percent": 80},
        { "name": "Javascript", "percent": 80},
        { "name": "Java", "percent": 60},
        { "name": "PHP", "percent": 40},
      ]
    },
    {
      "name": "Frontend frameworks",
      "skills": [
        { "name": "Angular", "percent": 90},
        { "name": "React", "percent": 50},
        { "name": "Vue", "percent": 30},
      ]
    },
    {
      "name": "DBMS",
      "skills": [
        { "name": "SQL Server", "percent": 70},
        { "name": "Azure SQL", "percent": 70},
        { "name": "SQLite", "percent": 60},
        { "name": "PostgreSQL", "percent": 60},
        { "name": "MySQL", "percent": 50},
        { "name": "DB2", "percent": 30},
        { "name": "Oracle", "percent": 30}
      ]
    },
    {
      "name": "NoSQL",
      "skills": [
        { "name": "MongoDB", "percent": 70},
        { "name": "Redis", "percent": 70},
        { "name": "CosmosDB", "percent": 60}
      ]
    },
    {
      "name": "Products",
      "skills": [
        { "name": "Biztalk Server", "percent": 80},
        { "name": "SharePoint", "percent": 80},
        { "name": "Docker", "percent": 60},
        { "name": "ELK", "percent": 50},
        { "name": "Kubernetes", "percent": 30}
      ]
    },
    {
      "name": "VCS",
      "skills": [
        { "name": "Git", "percent": 90},
        { "name": "SubVersion", "percent": 90},
        { "name": "TFS", "percent": 50}
      ]
    },
    {
      "name": "Devops",
      "skills": [
        { "name": "Github Actions", "percent": 80},
        { "name": "Azure Devops", "percent": 80},
        { "name": "Jenkins", "percent": 50}
      ]
    }
  ]);
  isHide = signal(true);
  gallery = toSignal(this.http.get<GalleryItem[]>('/assets/gallery3.json'), { initialValue: []});

  trackGroup(index: number, group: SkillGroup) {
    return index ? index : undefined;
  }


  constructor(private title: Title, private http: HttpClient) {
  }

  onVisible(): void {
    this.isHide.set(false);
    this.title.setTitle('Fabio Cometti - Skills');
  }
}
