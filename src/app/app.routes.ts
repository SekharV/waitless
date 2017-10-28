import { Routes } from '@angular/router';
import { DrHomeComponent } from './drhome/drhome.component';

export const ROUTES: Routes = [
  { path: '',      component: DrHomeComponent },
  { path: 'drhome',  component: DrHomeComponent }
];
