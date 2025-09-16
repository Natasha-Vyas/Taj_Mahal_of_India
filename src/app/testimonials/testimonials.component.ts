import { Component, OnInit } from '@angular/core';

type Review = { name: string; para: string };
type HeroData = { reviews: Review[] };

const DATA: { hero: HeroData } = {
  hero: {
    reviews: [
      {
        name: ' Priya S.',
        para:
          'The best Indian food in [City Name]! The flavors are so authentic, and the staff always makes us feel at home. The Butter Chicken is our family favorite!',
      },
      {
        name: 'James & Aisha R.',
        para:
          'We had Taj Mahal of India cater our wedding, and it was absolutely perfect. Guests are still talking about the food months later. Highly recommend for both dining and catering!',
      },
      {
        name: 'Daniel K.',
        para:
          'Every time I visit, the food tastes fresh and flavorful. The naan is always hot and soft, and the curries are spot-on. Definitely my go-to spot for Indian food.',
      },
      {
        name: 'Maria L.',
        para:
          'Wonderful service and delicious food. I’m vegetarian, and I love how many great options they offer. The Paneer Tikka Masala is amazing!',
      },
      {
        name: 'Robert T.',
        para:
          'A hidden gem in [City Name]! The ambiance is cozy, the staff is welcoming, and the food never disappoints. Truly feels like dining in India.',
      },
    ],
  },
};

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  hero!: HeroData;

  ngOnInit(): void {
    this.hero = DATA.hero;
  }

  // (Optional) Better *ngFor performance if needed:
  // trackByIndex = (_: number, __: Review) => _;
}
