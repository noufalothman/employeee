import { Component, OnInit } from '@angular/core';
import {Role} from "../Model/Role";
import {Router} from "@angular/router";
import {RoleService} from "../Service/role.service";
import {EmployeeModel} from "../Model/Employee";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {

  public choose : String =" " ;
  public rolelist: Role[] = [];
  chooseid: number = 0;
  public role!: Role;
  constructor(private router : Router ,  private roleservice: RoleService) { }

  ngOnInit(): void {
    this.getrole();
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


  getvalue(role: Role){
  console.log(role.name , role.id)
  }
/*  addrole(role: Role){
    this.roleservice.addRole(role);
  }*/
}
