import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeessService} from "../Service/employeess.service";
import {EmployeeModel} from "../Model/Employee";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {EmployeePage} from "../employeepage/employeepage.component"
import {Router} from "@angular/router";
import {RoleService} from "../Service/role.service";
import {Role} from "../Model/Role";

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddEmployee implements OnInit{



  public flag: boolean = false;
  public selectedRole : any;
  formgroup :FormGroup;

  constructor(private employeeService: EmployeessService , private router : Router , private roleservice : RoleService ,   private formBuilder: FormBuilder) {
    /*this.getrole();*/
    {
      this.formgroup = this.formBuilder.group({
        name : [''],
        email :  [''],
        jobTitle :  [''],
        phone :  [''],
        imageUrl :  [''],
        employeeCode :  [''],
        Active : [true] ,
        vacation : [true],
        role : []
      });
    }
  }
  public rolelist : Role[] = [] ;

  ngOnInit(): void {
    this.getrole();
 /*   this.rolelist = this.role.rolelist;*/

  }


  public onAddEmloyee(): void {
   /* console.log(addForm.value);*/
    /*document.getElementById('add-employee-form')?.click();*/
/*    addForm.value.Role_id = this.selectedRole;*/
    let employee : EmployeeModel = {
      employeeCode : this.formgroup.controls.employeeCode.value as string,
      name :  this.formgroup.controls.name.value as string,
      phone :  this.formgroup.controls.phone.value as string,
      id :  this.formgroup.controls.id.value as number,
      jobTitle :  this.formgroup.controls.jobTitle.value as string,
      imageUrl :  this.formgroup.controls.imageUrl.value as string,
      email :  this.formgroup.controls.email.value as string,
      vacation :  this.formgroup.controls.vacation.value as boolean,
      Active :  this.formgroup.controls.Active.value as boolean,
      role :  this.formgroup.controls.role.value as Role,
    };
    this.employeeService.addEmployee(employee).subscribe(
      (response: EmployeeModel) => {
        console.log(response);
        /*this.getEmployees();*/
        this.flag == false;
        this.router.navigate(["employeepage"]);
        this.formgroup.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.formgroup.reset();
      }
    );
  }

  public getrole(){
    this.roleservice.getRole().subscribe(
      (response: Role[]) => {
        this.rolelist = response;
        console.log(this.rolelist);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


/*


    public onUpdateEmloyee(employee: EmployeeModel): void {
      this.employeeService.updateEmployee(employee).subscribe(
        (response: EmployeeModel) => {
          console.log(response);
          this.employeepage.getEmployees();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public onDeleteEmloyee(employeeId: number): void {
      this.employeeService.deleteEmployee(employeeId).subscribe(
        (response: void) => {
          console.log(response);
          this.employeepage.getEmployees();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
*/

/*
  public onOpenModal(): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');

    }
    if (mode === 'edit') {

      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {

      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }*/

}
