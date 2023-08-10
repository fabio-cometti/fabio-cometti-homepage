import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSectionDirective } from 'src/app/directives/scroll-section.directive';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { WorkExperienceBlockComponent } from 'src/app/components/work-experience-block/work-experience-block.component';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'fc-work-experiences',
  standalone: true,
  imports: [
    CommonModule, 
    ScrollSectionDirective, 
    ObserveVisibilityDirective, 
    WorkExperienceBlockComponent
  ],
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperiencesComponent {
  isHide: boolean = true;

  experiences: Experience[] = [
    {
      year: '2022',
      company: 'Lemonpie S.r.l.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero arcu, molestie in lorem at, congue efficitur augue. Vestibulum tempor erat in turpis accumsan, ac vehicula erat aliquam. Mauris volutpat vehicula ligula in ultrices. Nullam nulla massa, aliquet vitae tellus eu, feugiat faucibus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus blandit suscipit tellus, vitae interdum lectus condimentum ac. Nunc ex dolor, egestas eget ex id, lobortis aliquet ex. '
    },
    {
      year: '2022',
      company: 'Lutech S.p.A.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero arcu, molestie in lorem at, congue efficitur augue. Vestibulum tempor erat in turpis accumsan, ac vehicula erat aliquam. Mauris volutpat vehicula ligula in ultrices. Nullam nulla massa, aliquet vitae tellus eu, feugiat faucibus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus blandit suscipit tellus, vitae interdum lectus condimentum ac. Nunc ex dolor, egestas eget ex id, lobortis aliquet ex. '
    },
    {
      year: '2008',
      company: 'Disc S.p.A.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero arcu, molestie in lorem at, congue efficitur augue. Vestibulum tempor erat in turpis accumsan, ac vehicula erat aliquam. Mauris volutpat vehicula ligula in ultrices. Nullam nulla massa, aliquet vitae tellus eu, feugiat faucibus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus blandit suscipit tellus, vitae interdum lectus condimentum ac. Nunc ex dolor, egestas eget ex id, lobortis aliquet ex. '
    }
  ];

  onVisible(): void {
    this.isHide = false;
  }
}
