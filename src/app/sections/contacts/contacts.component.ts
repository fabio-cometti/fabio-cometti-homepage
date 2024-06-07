import { ChangeDetectionStrategy, Component, Input, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faAt, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { Title } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactRequest, ContactRequestForm } from 'src/app/models/contact-request';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditsComponent } from 'src/app/components/credits/credits.component';

@Component({
  selector: 'fc-contacts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ObserveVisibilityDirective, ReactiveFormsModule, CreditsComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  faFacebook = signal(faFacebook);
  faTwitter = signal(faTwitter);
  faLinkedin = signal(faLinkedin);
  faGithub = signal(faGithub);
  faInstagram = signal(faInstagram);
  faAt = signal(faAt);
  faWordpress = signal(faWordpress);
  faClose = signal(faClose);

  public isContactFormVisible = signal(false);
  showCredits = signal(false);

  hideExtraContentHint = input(false);

  contactRequestForm = this.fb.group<ContactRequestForm>({
    email: this.fb.control('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    message: this.fb.control('', {nonNullable: true, validators: [Validators.required]})
  });

  constructor(private title: Title, private fb: FormBuilder, private http: HttpClient) {
  }

  onVisible(): void {
    this.title.setTitle('Fabio Cometti - Contacts');
  }

  showContactForm(ev: Event): void{
    ev.preventDefault();
    this.isContactFormVisible.set(true);
  }

  hideContactForm(): void{
    this.isContactFormVisible.set(false);
  }

  onSubmit(): void {
    const contactRequest = this.contactRequestForm.value;
    const entry = new HttpParams({ fromObject: {
      'form-name': 'contactRequestForm',
      ...contactRequest
    }});

    this.http.post(
      '/',
      entry.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text'
      }
    ).subscribe({
      next: () => {
          this.isContactFormVisible.set(false);
      },
      error: () => {
        this.isContactFormVisible.set(false);
      }
    });
  }

  credits(event: Event): void {
    event.preventDefault();
    this.showCredits.set(true);
  }

  closeCredits(): void {
    this.showCredits.set(false);
  }
}
