import { Routes } from '@angular/router';
import { DrHomeComponent } from './drhome/drhome.component';
import { DrCalendarComponent } from './drcalendar/drcalendar.component';
import { DrPaymentsComponent } from './drpayments/drpayments.component';
import { PtHomeComponent } from './patient/home.component';
import { PtAdminComponent } from './patient/admin.component';
import { PtSearchComponent } from './patient/search.component';
import { PtLoanComponent } from './patient/loan.component';
import { PtDoneComponent } from './patient/done.component';


export const ROUTES: Routes = [
  { path: '',      component: PtHomeComponent },
  { path: 'drhome',  component: DrHomeComponent },
  { path: 'drcalendar',  component: DrCalendarComponent },
  { path: 'drpayments',  component: DrPaymentsComponent },
  { path: 'pthome',  component: PtHomeComponent },
  { path: 'ptadmin',  component: PtAdminComponent },
  { path: 'ptsearch',  component: PtSearchComponent },
  { path: 'ptloan',  component: PtLoanComponent },
  { path: 'ptdone',  component: PtDoneComponent },
];

