import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeePage} from "./employeepage/employeepage.component";
import {AddEmployee} from "./addemployee/addemployee.component";
import {EmployeessService} from "./Service/employeess.service";
import {NewsComponent} from "./news/news.component";


export const routes: Routes = [

  {
    path : '' ,
    component : NewsComponent
  },
  {
    path : 'addemployee' ,
    component : AddEmployee
  },
  {
    path : 'employeepage' ,
    component : EmployeePage
  },
  {
    path : 'newscomponent' ,
    component : NewsComponent
  },
];


@NgModule({

  imports: [RouterModule.forRoot(routes)
    ],
  exports: [RouterModule ]

})
export class AppRoutingModule {}
