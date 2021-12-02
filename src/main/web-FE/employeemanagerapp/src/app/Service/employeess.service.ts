import {Injectable, NgModule} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { EmployeeModel } from "../Model/Employee";

@Injectable({providedIn: 'root'})
@NgModule()
export class EmployeessService {

  constructor(private http : HttpClient) {}

  private apiServerUrl = environment.apiBaseUrl;
  public getEmployee() : Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiServerUrl}/employee/all`);

  }
  public addEmployee(employee : EmployeeModel) : Observable<EmployeeModel> {
    console.log(employee.role , employee.name , "yyyyyyyyyyyy") /* cheacked*/
    return this.http.post<EmployeeModel>(`${this.apiServerUrl}/employee/add` , employee);

  }
  public updateEmployee(employee : EmployeeModel) : Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(`${this.apiServerUrl}/employee/update` , employee);
  }
  public deleteEmployee(Id : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${Id}`);

  }

}

