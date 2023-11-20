import { Component } from '@angular/core';
import { Student } from './models/student.model';
import { Book } from './models/book.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  b1!:Book;
  b2!:Book;
  b3!:Book;
  b4!:Book;

  books!:Book[];

  ngOnInit(){

  this.b1 = new Book("Titre 1"," Author 1","Edition 1",12.5,true); 
  this.b2 = new Book("Titre 2"," Author 2","Edition 2",15,false); 
  this.b3 = new Book("Titre 3"," Author 3","Edition 3",17.5,true); 
  this.b4 = new Book("Titre 4"," Author 4","Edition 4",10.5,false); 
  
  this.books= [this.b1,this.b2,this.b3,this.b4];
  }
}
