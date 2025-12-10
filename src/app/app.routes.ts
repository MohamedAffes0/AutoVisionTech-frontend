import { Routes } from '@angular/router';
import { MainPage } from './features/main-page/main-page';
import { ManageCars } from './features/manage-cars/manage-cars';
import { AdminPanel } from './features/admin-panel/admin-panel';
import { Signup } from './features/signup/signup';
import { Signin } from './features/signin/signin';
import { ManageReservations } from './features/manage-reservations/manage-reservations';
import { CarPage } from './features/car-page/car-page';
import { ProfilePage } from './features/profile-page/profile-page';
import { AboutUs } from './features/about-us/about-us';
import { Services } from './features/services/services';
import { Financing } from './features/financing/financing';
import { TradeIn } from './features/trade-in/trade-in';
import { Faq } from './features/faq/faq';
import { ContactUs } from './features/contact-us/contact-us';
import { Privacy } from './features/privacy/privacy';
import { Terms } from './features/terms/terms';
import { Warranty } from './features/warranty/warranty';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'manage-cars', component: ManageCars },
  { path: 'admin-panel', component: AdminPanel },
  { path: 'signup', component: Signup },
  { path: 'signin', component: Signin },
  { path: 'manage-reservations', component: ManageReservations },
  { path: 'car-page/:id', component: CarPage },
  { path: 'profile', component: ProfilePage },
  { path: 'about-us', component: AboutUs},
  { path: 'services', component: Services},
  { path: 'financing', component: Financing},
  { path: 'trade-in', component: TradeIn},
  { path: 'faq', component: Faq},
  { path: 'contact-us', component: ContactUs},
  { path: 'privacy', component: Privacy},
  { path: 'terms', component: Terms},
  { path: 'warranty', component: Warranty},
  { path: '**', redirectTo: '' },
];
