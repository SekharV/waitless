import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-patient-search',
  templateUrl: './search.component.html',
  styleUrls: ['./style.component.scss']
})
export class PtSearchComponent implements OnInit {

  data :any;

  constructor(accountService :AccountService) { 
    //console.log('Code '+accountService.AuthorizationCode);
    //accountService.login('10055670','aaa111');
    
    //this.data = accountService.getListOfpractitioners();
  }



  ngOnInit() {
   
    
  }

}
