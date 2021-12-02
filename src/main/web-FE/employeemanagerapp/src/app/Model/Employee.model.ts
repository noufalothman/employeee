import {Role} from "./Role";

export class EmployeeModel {

  id: number;
  name: string;
  email: string ;
  jobTitle: string;
  phone: string;
  imageUrl: string ;
  employeeCode: string ;
  Active: boolean ;
  vacation: boolean;
  role: Role;

}
