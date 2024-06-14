import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { WorkExperienceBlockComponent } from 'src/app/components/work-experience-block/work-experience-block.component';
import { Experience } from 'src/app/models/experience';
import { Title } from '@angular/platform-browser';
import { GalleryItem } from 'src/app/models/gallery-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fc-work-experiences',
  standalone: true,
  imports: [
    CommonModule,
    ScrollSectionDirective,
    ObserveVisibilityDirective,
    WorkExperienceBlockComponent,
    GalleryComponent
  ],
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperiencesComponent {
  isHide = signal(true);
  gallery = toSignal(this.http.get<GalleryItem[]>('/assets/gallery4.json'), {initialValue: []});

  experiences = signal<Experience[]>([
    {
      year: '2022',
      company: 'Lemonpie S.r.l.',
      description: 'Since April 2022 I have been employed at Lemonpie as a software developer. Here I mainly deal with the re-engineering of existing applications, again on the .NET/Azure platform, applying the latest patterns to microservices. I also participated in the definition of company best practices regarding coding, versioning procedures and continuous integration pipelines. In addition to these activities, I continue to deal with training with internal developers and, occasionally, I provide consultancy to external customers, both in the Microsoft BizTalk area, as well as training on .NET, software architectures and design patterns.'
    },
    {
      year: '2019',
      company: 'Lutech S.p.A.',
      description: 'Since June 2019 I start working in Lutech . Here my tasks were mainly those of software architect and development of distributed applications, with an exponential increase in cloud projects (mainly Azure) compared to on premises ones. I also deepened the issues of secure coding in the web and training activities, also with external customers.'
    },
    {
      year: '2008',
      company: 'Disc S.p.A.',
      description: 'I started my professional career at Disc in March 2008 as a Java developer, mainly working on software focused on sending XML requests to external scoring services. After a few months I switched to the .NET platform on which I mainly built distributed web applications. In parallel with the .NET development of web applications, I have deepened the study of the Microsoft SharePoint platforms (from the 2007 version to the online version) and Microsoft BizTalk (from the 2006 version to the 2020 version). My tasks included, in addition to the development activity, the research and development activity on new technologies and tools to be adopted, the architecture design and training for junior developers.'
    }
  ]);

  constructor(private title: Title, private http: HttpClient) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Work experiences');
    this.isHide.set(false);
  }
}
