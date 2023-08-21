import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'fc-contacts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ObserveVisibilityDirective],
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

  public isContactFormVisible: boolean = false;

  constructor(private title: Title) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Contacts');
  }

  showContactForm(): void{
    this.isContactFormVisible = true;
  }

  hideContactForm(): void{
    this.isContactFormVisible = false;
  }
}
