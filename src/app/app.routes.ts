import { Routes } from '@angular/router';
import { DrHomeComponent } from './drhome/drhome.component';
import { DrCalendarComponent } from './drcalendar/drcalendar.component';
import { DrPaymentsComponent } from './drpayments/drpayments.component';

export const ROUTES: Routes = [
  { path: '',      component: DrHomeComponent },
  { path: 'drhome',  component: DrHomeComponent },
  { path: 'drcalendar',  component: DrCalendarComponent },
  { path: 'drpayments',  component: DrPaymentsComponent }
];
