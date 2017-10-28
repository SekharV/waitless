import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AccountService } from './services/account.service';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AccountService,AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
