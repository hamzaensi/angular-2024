import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/student.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    MenuComponent,
    StudentComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
