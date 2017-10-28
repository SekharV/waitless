import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Waitless';


  // tslint:disable-next-line:one-line
  constructor(    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {
    accountService.login('10055670','aaa111');
  }



}
