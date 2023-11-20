export class Book {

    title! :string; 
    author!:string;
    edition!:string;
    price!:number;
    enPromo!:boolean;
    dateDeSortie!:Date;
    
    constructor(t:string,a:string,e:string,p:number,enp:boolean){
   
       this.title=t;
       this.author=a;
       this.edition=e;
       this.price=p;
       this.enPromo=enp; 
       this.dateDeSortie=new Date();
      }
   
   
   }