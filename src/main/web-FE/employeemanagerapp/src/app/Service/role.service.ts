import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {EmployeeModel} from "../Model/Employee";
import {Role} from "../Model/Role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
/*  public rolelist: Role[] = [];*/
  constructor(private http : HttpClient) {
    /*this.rolelist = this.RoleList.rolelistIN;*/

  }
  private apiServerUrl = environment.apiBaseUrl;

  public getRole() : Observable<Role[]> {
    return this.http.get<Role[]>(`${this.apiServerUrl}/role/findAllRole`);
  }
 /* public addRole(role : Role) : Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(`${this.apiServerUrl}/employee/add` , role);

  }*/

 /* public addRole(role : Role){
    this.rolelist.push(role);
  }*/
}
