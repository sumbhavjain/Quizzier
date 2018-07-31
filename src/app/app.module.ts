import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { WebCompanyDetailsComponent } from './web-company-details/web-company-details.component';
import { UserResultComponent } from './user-result/user-result.component';
import { UserTestInstructionsComponent } from './user-test-instructions/user-test-instructions.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { CompanyUserDetailsComponent } from './company-user-details/company-user-details.component';
import { TestConductedComponent } from './test-conducted/test-conducted.component';
import { UserService } from "./services/user.service";
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WebCompanyDetailsComponent,
    UserResultComponent,
    UserTestInstructionsComponent,
    UserHistoryComponent,
    CompanyUserDetailsComponent,
    TestConductedComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule
    ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
