import { Component, OnInit } from '@angular/core';

/** Minimal types matching your template usage */
type HeroData = {
  homeImg4: string;
};

/** Slice from your JSON (only what's needed here) */
const DATA: { brandName: string; hero: HeroData } = {
  brandName: 'Taj Mahal of India',
  hero: {
    homeImg4:
      'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/ecd04914-2782-481d-8d98-caf85233cd6b_4.jpg',
  },
};

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  hero!: HeroData;
  brandName!: string;

  ngOnInit(): void {
    this.hero = DATA.hero;
    this.brandName = DATA.brandName;
  }
}
