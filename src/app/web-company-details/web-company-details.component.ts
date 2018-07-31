import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-company-details',
  templateUrl: './web-company-details.component.html',
  styleUrls: ['./web-company-details.component.scss']
})
export class WebCompanyDetailsComponent implements OnInit {
  private configApproval;
  status= "Pending";
  constructor() { }

  ngOnInit() {
  }

  approveStatus(){
    this.status='Approved';
    this.configApproval={
      panelClass: ['approval-color'],
    }
  }

  disapproveStatus(){
    this.status='Disapproved';
  }


}
