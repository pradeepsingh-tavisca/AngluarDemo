import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import EmployeeService from '../services/employee-service';

@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.css']
})
export class EmpCountComponent {
  empCount: number = 0;
  colorData: string = "grey";
  otherCount: number = 100;
  constructor(private _empService: EmployeeService) { }
  changeColor() {
    this.colorData = "red";
  setInterval(() => {
      this.otherCount = this.otherCount + 1
    }, 5000)
  }
  
  getEmployees() {
    if (this._empService.employeeList.length) {
      this.empCount = this._empService.employeeList.length
    } else {
      this._empService.getEmployeeDetailsObservable().subscribe((response: any) => {
        this.empCount = response.length
      }, (error: Error) => {
        alert("API Failued because: " + error.message);
      })
    }
  }

}
