import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dr-calendar',
  templateUrl: './drcalendar.component.html',
  styleUrls: ['./drcalendar.component.scss']
})
export class DrCalendarComponent implements OnInit {
  public leads = [];
  public appointments = [];
  constructor() { }

  ngOnInit() {
    this.appointments = [
      { date: '29/Oct/2017', detail: 'Surgery(Mr. Joe - Knee replacemnt)'},
      { date: '30/Oct/2017', detail: 'Post surgery checkup(Miss. Elton)'},
      { date: '10/Nov/2017', detail: 'Appointment(Mr. Davin Jones)'},
      { date: '16/Nov/2017', detail: 'Surgery(Mr. John doe - Knee replacemnt)' },
    ];
    this.leads = [
      { id: 1, date: '20/Nov/2017', detail: 'Appointment request for(Mr. Milton - Knee replacement)'},
      { id: 2, date: '21/Nov/2017', detail: 'Appointment request for(Mr. Milton - Knee replacement)'},
      { id: 3, date: '10/Dec/2017', detail: 'Appointment request for(Mr. Milton - Knee replacement)' },
      { id: 4, date: '04/Dec/2017', detail: 'Appointment request for(Mr. Milton - Knee replacement)'}
    ];
  }
  handleChange(event , id) {
    const lead = this.leads.filter(item => item.id === id)[0];
    this.appointments.push( {date: lead.date, detail: lead.detail });
    this.leads = this.leads.filter(item => item.id !== lead.id);
  }


}
