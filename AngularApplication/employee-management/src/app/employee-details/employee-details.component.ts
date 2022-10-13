import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  userName: string = "Mayank Gupta";
  userAge = 10;
  userDesignation = "Developer"
  
  getUserDetails() {
    return `
      The User Name is ${this.userName}.
      The User Age is ${this.userAge}.
      The User Designation is ${this.userDesignation}.      
    `
  }
}
