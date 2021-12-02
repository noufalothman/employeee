import {Injectable, NgModule} from '@angular/core';
import {EmployeeModel} from "../Model/Employee";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Role} from "../Model/Role";
import {News} from "../Model/news"

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http : HttpClient) { }


  private apiServerUrl = environment.apiBaseUrl;


   public addnews(value: News) : Observable<News> {

      return this.http.post<News>(`${this.apiServerUrl}/news/add` , value);
    }

  getAllNews() : Observable<News[]>  {
     return this.http.get<News[]>(`${this.apiServerUrl}/news/getAllNews`);
  }
}
