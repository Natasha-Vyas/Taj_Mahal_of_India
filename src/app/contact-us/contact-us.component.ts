import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../services/app.service';

/** Minimal slice from your LA JSON */
const DATA = {
  brandName: 'Taj Mahal of India',
  address: '8566 W Pico Blvd, Los Angeles, CA 90035, United States',
  contact: '310-652-8598',
  email: 'sara.mrs2727@gmail.com',
  social: {
    hrefPhone: 'tel:310-652-8598',
    hrefEmail: 'mailto:sara.mrs2727@gmail.com',
    map: 'https://maps.app.goo.gl/7JGz7DD1CyLyvWek7',
  },
};

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  /** shown in template */
  success = false;
  address!: string;
  contact!: string;
  email!: string;
  social!: { hrefPhone: string; hrefEmail: string; map: string };

  /** reactive form */
  NameEmailPhoneMessage = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9+()\-\s]{7,}$/),
    ]),
    message: new FormControl(''),
  });

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.address = DATA.address;
    this.contact = DATA.contact;
    this.email = DATA.email;
    this.social = {
      hrefPhone: DATA.social.hrefPhone,
      hrefEmail: DATA.social.hrefEmail,
      map: DATA.social.map,
    };
  }

  submitNameEmailPhoneMessage(): void {
    if (this.NameEmailPhoneMessage.invalid) {
      this.NameEmailPhoneMessage.markAllAsTouched();
      return;
    }
    const body = this.NameEmailPhoneMessage.value;
    this.appService.contactUsSubmission(body).subscribe({
      next: () => (this.success = true),
      error: () => (this.success = true),
    });
  }
}
