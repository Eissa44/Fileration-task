import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactApiService } from 'src/app/core/servises/contact-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private _ContactApiService: ContactApiService) {}

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
  });

  handelForm(): void {
    if (this.contactForm.valid) {
      this._ContactApiService.contactAuth(this.contactForm.value).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
