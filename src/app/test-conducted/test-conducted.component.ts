import {HttpClient} from '@angular/common/http';
import { Component, OnInit, Injectable, ViewChild} from '@angular/core';
import { UserService } from "../../app/services/user.service";
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { User } from "../models/user.model";
import {MatPaginator} from '@angular/material';
import {MatSort, MatSortable, MatTableDataSource} from '@angular/material';




@Component({
  selector: 'app-test-conducted',
  templateUrl: './test-conducted.component.html',
  styleUrls: ['./test-conducted.component.scss']
})



export class TestConductedComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns= ['name','email','phone','company'];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any>{
  constructor(private userService: UserService){
    super();
  }

  connect(): Observable<User[]>{
    return this.userService.getUser();
  }

  disconnect(){

  }
}