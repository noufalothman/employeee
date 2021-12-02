import {Component, OnInit} from '@angular/core';
import {EmployeePage} from "./employeepage/employeepage.component";
import {EmployeessService} from "./Service/employeess.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /* implements OnInit*/{
  public title: String = "";


  constructor(private employeeService: EmployeessService  ) {
  }

/*
  ngOnInit(): void {
    this.employeeService.getEmployee();

  }*/
}
