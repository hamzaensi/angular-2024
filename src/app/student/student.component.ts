import { Component,Input } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input() student!:Student;
 
inc(){
this.student.age++;
}  
  
}
