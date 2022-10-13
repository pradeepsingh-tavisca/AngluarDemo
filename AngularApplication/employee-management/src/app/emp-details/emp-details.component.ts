import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  filterText: string ="";
  newEmployee = {
    name: "",
    id: 0,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }
  employeeDetails = [{
    name: "Pradeep Singh",
    id: 1,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU" 
  },
  {
    name: "Rahul Yadav",
    id: 2,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU" 
  },
  {
    name: "Prerna Singh",
    id: 3,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU" 
  },
  {
    name: "Neha Singh",
    id: 4,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU" 
  },
  {
    name: "Robin Hood",
    id: 5,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU" 
  },
  {
    name: "Milind Shah",
    id: 6,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU" 
  },
  {
    name: "Milind Shah",
    id: 7,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU" 
  },
  ]
  filterList=this.employeeDetails;

   
  filterEmployeeList() {
    if (this.filterText != "") {
      
      this.filterList = this.employeeDetails.filter((employee) => {
        return employee.name.indexOf(this.filterText) > -1;
      })
    }
    
    if (this.filterText == "") {
      this.filterList = this.employeeDetails;
    }
    
  }
  deleteEmployeeList(employeeId:number){
    this.employeeDetails=this.employeeDetails.filter((employee)=>{
       return employee.id!=+employeeId;
    })
    this.filterList=this.employeeDetails;
    this.filterText="";
  }
  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.id && this.newEmployee.avatar && this.newEmployee.createdAt) {
      this.employeeDetails.push(this.newEmployee);
      this.filterList = this.employeeDetails;
      this.filterText = "";
      this.clearValue();
    }
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
