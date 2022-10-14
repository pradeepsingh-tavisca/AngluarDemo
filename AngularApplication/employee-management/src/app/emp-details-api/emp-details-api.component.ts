import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import EmployeeService from '../services/employee-service';

@Component({
  selector: 'app-emp-details-api',
  templateUrl: './emp-details-api.component.html',
  styleUrls: ['./emp-details-api.component.css']
})

export class EmpDetailsApiComponent {
  constructor(private _empService: EmployeeService) {
    this._empService.getEmployeeDetailsObservable().subscribe((response) => {
      this.employeeDetails = response;
      this.filterList = this.employeeDetails;
    }, (error: Error) => {
      alert("API Failued because: " + error.message)
    })
  }
  filterText: string ="";
  newEmployee = {
    name: "",
    id: 0,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }
  employeeDetails:any = [{}]
  filterList=this.employeeDetails;
  filterEmployeeList() {
    if (this.filterText != "") {
      
      this.filterList = this.employeeDetails.filter((employee:any) => {
        return employee.name.indexOf(this.filterText) > -1;
      })
    }
    
    if (this.filterText == "") {
      this.filterList = this.employeeDetails;
    }
    
  }
  deleteEmployeeList(employeeId:number){
    this._empService.deleteEmployee(employeeId).subscribe(() => {
      this.employeeDetails = this.employeeDetails.filter((employee: any) => {
        return +employee.id != +employeeId;
      });
      
      this.filterList = this.employeeDetails;
      this.filterText = "";
      debugger;
      this._empService.getEmployeeDetailsAndNotify();
    }, () => {
      alert("Failed to Delete Employee with id: " + employeeId)
    });
  }
  addEmployee() {
    this._empService.addEmployee(this.newEmployee.name, this.newEmployee.id).subscribe(() => {
      debugger;
      this.employeeDetails.push(this.newEmployee);
      this.filterList = this.employeeDetails;
      this.filterText = "";
      this.clearValue();
      this._empService.getEmployeeDetailsAndNotify();
    });
  }
  clearValue() {
    this.newEmployee = {
      name: "",
      id: 0,
      createdAt: "Today",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
    }
  }
  }
