import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Waitless';

  
  // tslint:disable-next-line:one-line
  constructor(private accountService: AccountService){
    accountService.login('10055670','aaa111');
  }



}
