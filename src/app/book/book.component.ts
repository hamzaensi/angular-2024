import { Component,Input } from '@angular/core';
import { Book } from '../models/book.models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book!:Book;

  enPromo(){

    //toggle  
    this.book.enPromo=!this.book.enPromo;
  }
  pasEnPromo(){

    //toggle  
    this.book.enPromo=!this.book.enPromo;
  }
}
