import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmployeeModel} from "../Model/Employee";
import {HttpErrorResponse} from "@angular/common/http";
import {NewsService} from "../Service/news.service";
import {Router} from "@angular/router";
import {News} from "../Model/news";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news : News[] = [] ;

  constructor(public newsservice : NewsService , public router : Router ) { }

  ngOnInit(): void {
    this.getAllNews();
  }
  url: any; //Angular 11, for stricter type
  msg = "";

  //selectFile(event) { //Angular 8
/*  selectFile(event: any) { //Angular 11, for stricter type
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/!*!/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
      console.log(this.url)
    }
  }*/


  /*
    imageObject = [{
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {

      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
    }, {
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.'
    },{
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
    }, {
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.'
    }];*/

  fillImage(){


   /* for(var i =this.imageObject.length ; i > 0  ; i++)
    {
      this.imageObject[i].thumbImage = this.news[i].link;
    }*/
  }

  onAddnews(newsForm: NgForm) {

    this.newsservice.addnews(newsForm.value).subscribe(

      (response: News) => {

        console.log(newsForm.value)
      /*  this.imageObject.push({thumbImage : newsForm.value.link ,title : newsForm.value.title });
        this.fillImage();*/
        this.getAllNews();
       this.router.navigate(["newscomponent"]);
        newsForm.reset();
      },

    );
  }

  getAllNews(){

    this.newsservice.getAllNews().subscribe(

      (response : News[]) => {
        console.log(response)
        this.news = response;
      }

    ),
    (error: HttpErrorResponse) => {
      alert(error.message);

    }
  }

}

