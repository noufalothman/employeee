import

{Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeModel} from "../Model/Employee";
import {EmployeessService} from "../Service/employeess.service";
import {Router} from "@angular/router";
import {AddEmployee} from "../addemployee/addemployee.component"
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-employeepage',
  templateUrl: './employeepage.component.html'
})
export class EmployeePage implements OnInit{


  constructor(private router : Router ,  private employeeService: EmployeessService) {

  }
  ngOnInit(): void {
  /*  this.router.navigate(['employeepage'])*/
    this.getEmployees();

  }

  public employees: EmployeeModel[] = [];
  public addemployee  : AddEmployee | any;
  editEmployee : EmployeeModel | any ;
  editflag: boolean = false;


  public onEdit(employee: EmployeeModel): void {
    this.editEmployee = employee;
    this.editflag = true;

  }
  public onUpdate(from : NgForm ){

   /* this.editEmployee = from.value;*/
   /* console.log(this.editEmployee);*/
    this.employeeService.updateEmployee(this.editEmployee).subscribe(
    (response: EmployeeModel) => {
      console.log(response);
      this.getEmployees();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );}

  public onDelete(employeeId: number): void {
      this.employeeService.deleteEmployee(employeeId).subscribe(
        (response: void) => {
          console.log(response);
          this.getEmployees();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


  public getEmployees(): void {
    this.employeeService.getEmployee().subscribe(
      (response: EmployeeModel[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }



  public searchEmployees(key: string): void {
    console.log(key);
    const results: EmployeeModel[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }


}


