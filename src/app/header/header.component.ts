import { Component, OnInit } from '@angular/core';
type NavLink = {
  text: string;
  link: string;
  type: 'internal' | 'external' | 'logo';
  options?: { name: string; link: string }[];
};

type CssConfig = {
  logo?: string;
  imgSize?: string;
  btnCss?: string;
  navbar?: string;
  grubhibIcon?: string;
};

const DATA: {
  logo: string;
  brandName: string;
  address: string;
  contact: string;
  email: string;
  social: {
    orderOnline?: string;
    yelp?: string;
    gmb?: string;
    facebook?: string;
    instagram?: string;
    dd?: string;
    ue?: string;
    grubhub?: string;
    onlinelink?: string;
    hrefPhone: string;
    hrefEmail: string;
    map: string;
  };
  css?: { grubhibIcon?: string };
  navbar: { links: NavLink[] };
} = {
  logo:
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a95ac400-80b3-4563-9848-112c9be11ed2_3-removebg-preview.png',
  brandName: 'Taj Mahal of India',
  address: '8566 W Pico Blvd, Los Angeles, CA 90035, United States',
  contact: '213-563-9706',
  email: 'sara.mrs2727@gmail.com',
  social: {
    orderOnline:
      'https://order.online/store/taj-mahal-of-india-restaurant-los-angeles-88080/?delivery=true&hideModal=true&rwg_token=ACgRB3fnrjFAGJwJkwcL-Y6eVCAJktiGslBCM1Jt6HAcKVhVo7DQX_SLSb6GC16fWCwzAW-S8ApgP-Wtejm9IpXUJYB3ixqORg==&utm_source=gfo',
    yelp: 'https://www.yelp.com/biz/taj-mahal-of-india-restaurant-los-angeles',
    gmb: 'https://share.google/G1v9FzH03Fhh2X0zl',
    dd: 'https://www.doordash.com/store/taj-mahal-of-india-restaurant-los-angeles-88080/2436491/?pickup=true&rwg_token=ACgRB3cSIQIEkHBkht98v5CDE7jA8xUmYE8KwCoa1XsDUkT6xGbqM_GqY5FMqKiyY5eQxmx_02HrwTrqvT0KjduG3iagshazlQ==&utm_campaign=gpa',
    ue: 'https://www.ubereats.com/store/taj-mahal-of-india-pico-blvd/B9h6_zuBROiKDhdZ9JF2eA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas',
    grubhub:
      'https://www.grubhub.com/restaurant/taj-mahal-of-india-8566-w-pico-blvd-los-angeles/70527?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=ACgRB3d2RB9pS0_cuOQbldIkWxJZS8x4lmo-7jHRVFzzV1fRCt5mFIrEaCHGyjtohly1jIhkAV-0jiAnX-ZMnC7__ztnREHHyA%3D%3D',
    onlinelink: 'tel:213-563-9706',
    hrefPhone: 'tel:213-563-9706',
    hrefEmail: 'mailto: sara.mrs2727@gmail.com',
    map: 'https://maps.app.goo.gl/7JGz7DD1CyLyvWek7',
  },
  css: {
    grubhibIcon: 'width:90px;',
  },
  navbar: {
    links: [
      { text: 'Home', link: '/home', type: 'internal', options: [] },
      { text: 'About', link: '/about-us', type: 'internal', options: [] },
      { text: 'Menu', link: '/menu/all', type: 'internal', options: [] },
      { text: 'Catering', link: '/catering', type: 'internal', options: [] },
      { text: '', link: '/', type: 'logo', options: [] },
      { text: 'Testimonials', link: '/testimonials', type: 'internal', options: [] },
      { text: 'Contact', link: '/contact-us', type: 'internal', options: [] },
      {
        text: 'Order Online',
        link: 'https://order.online/store/taj-mahal-of-india-restaurant-los-angeles-88080/?delivery=true&hideModal=true&rwg_token=ACgRB3fnrjFAGJwJkwcL-Y6eVCAJktiGslBCM1Jt6HAcKVhVo7DQX_SLSb6GC16fWCwzAW-S8ApgP-Wtejm9IpXUJYB3ixqORg==&utm_source=gfo',
        type: 'external',
        options: [],
      },
    ],
  },
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Top bar info
  contact!: string;
  address!: string;
  social!: {
    hrefPhone: string;
    hrefEmail: string;
    map: string;
    yelp?: string;
    gmb?: string;
  };

  // Navbar
  logo!: string;
  links: NavLink[] = [];

  // Inline style strings used by your template
  css: CssConfig = {
    logo: 'width: 120px;',
    imgSize: 'width: 140px;',
    btnCss:
      'background:#c00504;color:#fff;border-radius:4px;padding:8px 16px;text-transform:uppercase;font-weight:600;display:inline-block;',
    navbar: 'background-color:#fff;',
    grubhibIcon: DATA.css?.grubhibIcon || 'width:90px;',
  };

  // Mobile toggle state
  close = true;

  ngOnInit(): void {
    // Map JSON -> component fields
    this.logo = DATA.logo;
    this.contact = DATA.contact;
    this.address = DATA.address;

    this.social = {
      hrefPhone: DATA.social.hrefPhone,
      hrefEmail: DATA.social.hrefEmail,
      map: DATA.social.map,
      yelp: DATA.social.yelp,
      gmb: DATA.social.gmb,
    };

    // Normalize links: drop empty `options` so *ngIf="!link.options" renders
    this.links = (DATA.navbar.links || []).map((l) => {
      const hasOptions = Array.isArray(l.options) && l.options.length > 0;
      const { options, ...rest } = l as any;
      return hasOptions ? l : (rest as NavLink);
    });
  }

  // Matches your (click)="change(!close)"
  change(next: boolean): void {
    this.close = next;
  }
}
