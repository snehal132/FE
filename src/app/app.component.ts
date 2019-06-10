import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'JasmineKarmaExample';
  title1 = 'kinjal';

   // public number1:number=2;
   // public number2:number=2;
    public result : number = 0;
  
  //result : number;

  constructor (){}

//   public add():number{
//     this.result = this.num1 + this.num2;
//     return this.result;
// }


  public add(number1 :number , number2 : number){
   var num1 = +number1; 
   var num2 = +number2; 
  this. result = num1+num2;  

  return  this. result;
 
  }
}
