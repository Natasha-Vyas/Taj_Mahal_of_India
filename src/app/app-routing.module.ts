import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';
import { CateringComponent } from './catering/catering.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: `home`,
    component: HomeComponent
  },
  {
    path: `about-us`,
    component: AboutUsComponent
  },
  {
    path: `testimonials`,
    component: TestimonialsComponent
  },
  {
    path: `contact-us`,
    component: ContactUsComponent
  },
  {
    path: `menu/:name`,
    component: MenuComponent
  },
  {
    path: `catering`,
    component: CateringComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
