import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-user-details',
  templateUrl: './company-user-details.component.html',
  styleUrls: ['./company-user-details.component.scss']
})
export class CompanyUserDetailsComponent implements OnInit {

  public ApprovedClass='approved-border';
  constructor() { }

  ngOnInit() {
  }
}
