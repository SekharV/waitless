import { Injectable } from '@angular/core';
import { Http,RequestOptionsArgs } from '@angular/http';

@Injectable()
export class AccountService {

  constructor(private http: Http) {

   }

   // tslint:disable-next-line:one-line
   login(username: string, password: string){
    var body ={
      "loginRequest": {
        "brand": "nab",
        "lob": "nab",
        "credentials": {
          "apiStructType": "usernamePassword",
          "usernamePassword": {
            "username": username,
            "password": password
          }
        }
      }
    };



    var result = this.http.post('https://hackathon.api.extnp.nab.com.au/v2/auth?v=1',body);
    result.subscribe();//TODO : get Authorization token.
   }
}
