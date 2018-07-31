import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 13, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 14, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 15, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 16, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 17, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 18, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 19, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 20, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 21, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 22, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},

];