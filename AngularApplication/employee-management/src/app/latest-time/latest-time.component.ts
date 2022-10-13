import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-time',
  templateUrl: './latest-time.component.html',
  styleUrls: ['./latest-time.component.css']
})
export class LatestTimeComponent {
  currentTime: string = this.getLatestTime();
  counter: number = 0;
  inputValue: any = "1000"; 
  
  constructor() {
    setInterval(() => {
      this.currentTime = this.getLatestTime();
    }, 1000)
  }

  getLatestTime() {
      return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  }
  
  incrementCounter() {
    this.counter = this.counter + 1;
  }
  
  inputValueChanged(event: any) {
    this.inputValue = event.target.value;
  }
  
  modifyCounter() {
    this.counter = +this.inputValue;
    this.inputValue = 0;
  }
  
  inputValueChange() {
    this.inputValue = 1000000;
  }

}
