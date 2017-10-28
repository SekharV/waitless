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
    //console.log(body);
    //let test = new RequestOptionsArgs()
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    headers.append('x-nab-key', '0c12ce1a-f5a5-4933-b5aa-c27e14c757d7');


    var result = this.http.post('https://hackathon.api.extnp.nab.com.au/v2/auth?v=1',body,{Headers: headers});
    result.subscribe();//TODO : get Authorization token.
   }






   /*{
    "loginRequest": {
      "brand": "nab",
      "lob": "nab",
      "credentials": {
        "apiStructType": "usernamePassword",
        "usernamePassword": {
          "username": "10055670",
          "password": "aaa111"
        }
      }
    }
  }*/



}
