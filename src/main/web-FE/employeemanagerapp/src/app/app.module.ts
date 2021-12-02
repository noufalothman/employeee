import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployee } from './addemployee/addemployee.component';
import {EmployeePage} from "./employeepage/employeepage.component";
import {FormsModule, NgSelectOption, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent ,HttpClient } from '@angular/common/http'
import {EmployeeModel} from "./Model/Employee";
import {from} from "rxjs";
import {EmployeessService} from "./Service/employeess.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolelistComponent } from './rolelist/rolelist.component';
import {CommonModule} from "@angular/common";
import { NewsComponent } from './news/news.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent ,
    EmployeePage ,
    AddEmployee,
    RolelistComponent,
    NewsComponent
  ],

    imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule
        , EmployeessService
        , NgImageSliderModule, ReactiveFormsModule

    ],

  providers: [HttpClient
               ,BrowserModule,
               HttpClientModule],

  bootstrap: [AppComponent]
})
export class AppModule {}
