import { Component, OnInit } from '@angular/core';

/** Keep it simple with types that match your HTML usage */
type HeroData = {
  homeVideo: string;
  homeImg1: string;
  homeImg2?: string;
  homeImg3?: string;
  homeImg4?: string;
  homeImg5?: string;
  awards: string[];
  homeGallery: string[];
};

const DATA: { hero: HeroData } = {
  hero: {
    homeImg1: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3e1f47ad-4326-4c18-a450-11f9fd167cbc_1.jpg',
    homeImg2: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e390090e-524d-4493-bcdb-979b1a3310d8_2.jpg',
    homeImg3: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/dc81452f-a3fc-44ee-b34b-4cd808e16f09_3.jpg',
    homeImg4: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/ecd04914-2782-481d-8d98-caf85233cd6b_4.jpg',
    homeImg5: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/614abff8-d3a8-4fb8-bde9-746ee46998f3_5.jpg',
    homeVideo:
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/32c96a90-ebf1-42e5-ab45-ec867803bc0a_Taj+Mahal+banner+video.mp4',
    awards: [
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f8eb2234-3902-4ce9-90ad-de80bbcf5899_award3.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/dfe4c46a-1721-4df6-a29c-4fd6c5cf0c8e_award4.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6c380baf-8b4d-400c-b715-574a310f8b38_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c386b7c7-37f0-4d2a-ae39-5c9cbfb3d9de_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/601ae661-64bf-4a1e-9627-f19674620154_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f8eb2234-3902-4ce9-90ad-de80bbcf5899_award3.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/dfe4c46a-1721-4df6-a29c-4fd6c5cf0c8e_award4.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6c380baf-8b4d-400c-b715-574a310f8b38_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c386b7c7-37f0-4d2a-ae39-5c9cbfb3d9de_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/601ae661-64bf-4a1e-9627-f19674620154_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f8eb2234-3902-4ce9-90ad-de80bbcf5899_award3.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/dfe4c46a-1721-4df6-a29c-4fd6c5cf0c8e_award4.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6c380baf-8b4d-400c-b715-574a310f8b38_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c386b7c7-37f0-4d2a-ae39-5c9cbfb3d9de_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/601ae661-64bf-4a1e-9627-f19674620154_WhatsApp%20Image%202025-08-20%20at%2007.jpeg',
    ],
    homeGallery: [
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b4b547a8-e1aa-4764-9dcc-a8a6bfeb41cd_Aloo%20gobi%20Taj.jpg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/9186281e-8d8c-46c8-bfcf-265563824aff_Chicken%20Tikka%20Masala%20Taj.jpg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b1b7aa0d-96a5-4c36-9416-71ff640f3797_Fish%20Tandoori.jpg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/7f38a7b8-48a9-4a6e-a941-b3c07bc0e966_Garlic%20Naan%20Taj.jpg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/be3c11a7-3b90-468b-bf29-20c783a6d468_Hummus.jpg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c35a5415-8e9f-4b5a-b3ee-af903b16c948_Lamb%20Biryani.jpg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f78752e2-899c-4d01-a5d3-d7e384fb2402_Lunch%20Buffet.jpg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/5808b2de-dc12-44f0-8675-73b5c8c80f1e_Papdi%20Chat.jpg',
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/d2b388cb-b2ef-4742-83ee-01f4187085a1_Rasmalai%20Taj.jpg',
    ],
  },
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hero!: HeroData;

  /** Awards carousel state */
  currentIndex = 0;
  transition = 'transform 0.4s ease';

  ngOnInit(): void {
    // Map JSON -> component fields
    this.hero = DATA.hero;
  }

  /** Compute transform for awards track */
  tajmahalGetTransform(): string {
    // Assumes each .carousel-item is 100% width of the viewport/carousel container.
    // If your CSS shows multiple items at once, adjust the percentage math accordingly.
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  tajmahalPrevSlide(): void {
    const n = this.hero.awards?.length || 0;
    if (!n) return;
    this.currentIndex = (this.currentIndex - 1 + n) % n;
  }

  tajmahalNextSlide(): void {
    const n = this.hero.awards?.length || 0;
    if (!n) return;
    this.currentIndex = (this.currentIndex + 1) % n;
  }
}
