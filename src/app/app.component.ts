import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sourav';

  count =0;

  number1= 2;
  number2= 3;
  result=0;
  

  listOfNumbers = [12,43,543,53,1];

  listOfName =["sourav","pulak","abhishek"];

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }
  
  Add = () => {
    this.result=this.number1+this.number2;
  }

}
