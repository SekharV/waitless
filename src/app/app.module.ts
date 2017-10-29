import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AccountService } from './services/account.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/http.service';
import { DrHomeComponent } from './drhome/drhome.component';
import { DrCalendarComponent } from './drcalendar/drcalendar.component';
import { DrPaymentsComponent } from './drpayments/drpayments.component';
import { PtHomeComponent } from './patient/home.component';
import { PtAdminComponent } from './patient/admin.component';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DrHomeComponent,
    DrCalendarComponent,
    DrPaymentsComponent,
    PtHomeComponent,
    PtAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
