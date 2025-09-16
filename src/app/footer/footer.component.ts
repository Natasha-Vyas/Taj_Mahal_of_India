import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../services/app.service';

type Social = {
  hrefPhone: string;
  hrefEmail: string;
  map: string;
  gmb?: string;
  yelp?: string;
  orderOnline?: string;
  dd?: string;
  ue?: string;
  grubhub?: string;
};

type CssConfig = Record<string, string>;

/** Slice of your LA JSON used by this footer */
const DATA = {
  logo:
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a95ac400-80b3-4563-9848-112c9be11ed2_3-removebg-preview.png',
  brandName: 'Taj Mahal of India',
  address: '8566 W Pico Blvd, Los Angeles, CA 90035, United States',
  contact: '213-563-9706',
  email: 'sara.mrs2727@gmail.com',
  css: { grubhibIcon: 'width:90px;' },
  social: {
    orderOnline:
      'https://order.online/store/taj-mahal-of-india-restaurant-los-angeles-88080/?delivery=true&hideModal=true&rwg_token=ACgRB3fnrjFAGJwJkwcL-Y6eVCAJktiGslBCM1Jt6HAcKVhVo7DQX_SLSb6GC16fWCwzAW-S8ApgP-Wtejm9IpXUJYB3ixqORg==&utm_source=gfo',
    yelp: 'https://www.yelp.com/biz/taj-mahal-of-india-restaurant-los-angeles',
    gmb: 'https://share.google/G1v9FzH03Fhh2X0zl',
    dd: 'https://www.doordash.com/store/taj-mahal-of-india-restaurant-los-angeles-88080/2436491/?pickup=true',
    ue: 'https://www.ubereats.com/store/taj-mahal-of-india-pico-blvd/B9h6_zuBROiKDhdZ9JF2eA',
    grubhub:
      'https://www.grubhub.com/restaurant/taj-mahal-of-india-8566-w-pico-blvd-los-angeles/70527?pickup=true',
    hrefPhone: 'tel:213-563-9706',
    hrefEmail: 'mailto:sara.mrs2727@gmail.com',
    map: 'https://maps.app.goo.gl/7JGz7DD1CyLyvWek7',
  } as Social,
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  /** Top/mobile CTA + bottom bar bindings */
  logo!: string;
  brandName!: string;
  address!: string;
  contact!: string;
  emailid!: string; // template expects `emailid`
  social!: Social;
  css: CssConfig = { grubhibIcon: DATA.css.grubhibIcon || 'width:90px;' };
  year = new Date().getFullYear();

  /** Contact form state in footer */
  success = false;
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
    // Map JSON -> component fields
    this.logo = DATA.logo;
    this.brandName = DATA.brandName;
    this.address = DATA.address;
    this.contact = DATA.contact;
    this.emailid = DATA.email;
    this.social = DATA.social;
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


"https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b643b80b-6e47-4496-a984-fb75aa99aec7_door-dash.png"
