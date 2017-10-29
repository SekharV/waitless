import { Injectable } from '@angular/core';
import { Http,RequestOptionsArgs,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class AccountService {

  AuthorizationCode: any;
  

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

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('x-nab-key', '0c12ce1a-f5a5-4933-b5aa-c27e14c757d7');

    let options = new RequestOptions({headers: headers});
    var result = this.http.post('https://hackathon.api.extnp.nab.com.au/v2/auth?v=1',body,options);
    result.subscribe(data => {
      var response = data.json();
      this.AuthorizationCode = response.loginResponse.tokens[0].value;
      console.log(this.AuthorizationCode);
      //this.getListOfpractitioners();
    });
   }


   getListOfpractitioners(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-nab-key', '0c12ce1a-f5a5-4933-b5aa-c27e14c757d7');
    console.log('Practioner ACode :'+this.AuthorizationCode);
    headers.append('Authorization',this.AuthorizationCode);
    headers.append('x-nab-test-case','1234-4567-1001');
    let options = new RequestOptions({headers: headers});
    var result = this.http.get('https://hackathon.api.extnp.nab.com.au/v2/health/practitioners/3000?v=1',options)
      .subscribe(data => {
        var response = data.json();
        var practioners = response.practitionersResponse.practitioners;
        console.log(practioners);

      });



   }



}
