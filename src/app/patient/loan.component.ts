import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./style.component.scss']
})
export class PtLoanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onButtonGroupClick($event){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "LI" ) {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
    }
  }

  isPermanentResident(){
    return 'Y';
  }

}
