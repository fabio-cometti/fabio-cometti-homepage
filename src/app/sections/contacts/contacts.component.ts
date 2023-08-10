import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'fc-contacts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faAt = faAt;
  faWordpress = faWordpress;
}
