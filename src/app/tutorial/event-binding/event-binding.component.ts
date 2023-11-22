import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  styleOb={
    color:'black',
    
  };

  counter= 0

buttonClick() {
  alert('you have click the button');
  this.styleOb.color='red';
  //throw new Error('Method not implemented.');
}
mouseEnrterd(){
  alert('You have enterd into mouse');
}

increaseCounter(event:MouseEvent){
  this.counter++;
  
  console.log(event);
  console.log(event.target);
  
  let button=event.target as HTMLButtonElement;
  console.log(button.textContent);
}

printInputValue(event:KeyboardEvent,inputField: HTMLInputElement){
  console.log(event.target);
const input=event.target as HTMLInputElement;
console.log(input.value);
console.log(input.value);
inputField.setAttribute('style',"color:red");
}

}
