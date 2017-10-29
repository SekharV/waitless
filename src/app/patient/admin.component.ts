import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./style.component.scss']
})
export class PtAdminComponent implements OnInit {

  
customerProfile = {
  "customerDetailsResponse": {
      "apiStructType": "person",
      "person": {
          "firstName": "Leonard",
          "lastName": "Xavier",
          "prefixTitle": "Dr.",
          "shortFirstName": "Xav",
          "middleNames": "S",
          "otherName": "Leon",
          "suffixTitle": "Jr",
          "preferredName": "Leo",
          "nabEmployeeType": "Contract",
          "dateOfBirth": "1978-01-25",
          "maritalStatus": "Married"
      },
      "phone": {
          "id": "0345673444",
          "idType": "home",
          "doNotDisturb": {
              "dndStart": "0700",
              "dndEnd": "1800"
          }
      },
      "mobile": {
          "id": "0416585432",
          "idType": "mobile",
          "doNotDisturb": {
              "dndStart": "0700",
              "dndEnd": "1800"
          }
      },
      "email": {
          "id": "leo@test.com",
          "idType": "work"
      },
      "physicalAddress": {
          "addressType": "physicalAddress",
          "line1": "800 Bourke Street",
          "line2": "Street 1",
          "city": "Docklands",
          "state": "Victoria",
          "postCode": "3008",
          "country": "Australia"
      },
      "postalAddress": {
          "addressType": "postalAddress",
          "line1": "55 Collins Street",
          "city": "Docklands",
          "state": "Victoria",
          "postCode": "3008",
          "country": "Australia"
      },
      "customerType": "Person",
      "bankerDetails": {
          "code": "B445",
          "name": "John Doe",
          "phone": "02987645934",
          "mobile": "041645679999",
          "fax": "0412345698"
      },
      "customerStatus": "Active",
      "marketSegment": "Market Segment",
      "industryCode": "4321",
      "industryDescription": "addressBrief",
      "preferredContactType": "phone",
      "contacts": [
          {
              "apiStructType": "phone",
              "phone": {
                  "id": "0345673444",
                  "idType": "home",
                  "doNotDisturb": {
                      "dndStart": "0700",
                      "dndEnd": "1800"
                  }
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "phone",
              "phone": {
                  "id": "0416585432",
                  "idType": "mobile",
                  "doNotDisturb": {
                      "dndStart": "0700",
                      "dndEnd": "1800"
                  }
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "phone",
              "phone": {
                  "id": "0345673447",
                  "idType": "work",
                  "doNotDisturb": {
                      "dndStart": "0700",
                      "dndEnd": "1800"
                  }
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "email",
              "email": {
                  "id": "leo@test.com",
                  "idType": "home"
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "email",
              "email": {
                  "id": "leo2@test.com",
                  "idType": "work"
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "facebook",
              "facebook": {
                  "id": "leohoang"
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "twitter",
              "twitter": {
                  "id": "lhoang@twitter.com"
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "skype",
              "skype": {
                  "id": "leo765237"
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "addressBrief",
              "addressBrief": {
                  "addressType": "physicalAddress",
                  "line1": "800 Bourke Street",
                  "city": "Docklands",
                  "state": "Victoria",
                  "postCode": "3008",
                  "country": "Australia"
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          },
          {
              "apiStructType": "addressBrief",
              "addressBrief": {
                  "addressType": "postalAddress",
                  "line1": "55 Collins Street",
                  "city": "Docklands",
                  "state": "Victoria",
                  "postCode": "3008",
                  "country": "Australia"
              },
              "preferredMethodOfCommunication": true,
              "receiveMarketingInfo": true
          }
      ]
  },
  "status": {
      "code": "API-200",
      "message": "Success"
  }
};

fullName: any;



  constructor() { 
    this.fullName = this.customerProfile.customerDetailsResponse.person.firstName +' '+this.customerProfile.customerDetailsResponse.person.lastName;
  }

  ngOnInit() {
  }
  model;
  /*TODO : https://hackathon.api.extnp.nab.com.au/v2/customer/profile?v=1*/
  
  /* TODO : Call Medicare Api*/
  
  






}
