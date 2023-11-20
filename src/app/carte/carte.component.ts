import { Component } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {

  fname!:string; 
  lname!:string; 
  compteur!:number;

  ngOnInit() {

    this.fname="Mohamed";
    this.lname="Ahmed";
    this.compteur=5;
    
  }

  onAddSnap() {
    this.compteur++;
  }
}
