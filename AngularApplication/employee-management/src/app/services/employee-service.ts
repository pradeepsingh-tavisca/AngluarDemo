import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export default class EmployeeService {
    
    employeeList = [];
    employeeListUpdateEvent: EventEmitter<void> = new EventEmitter<void>();
    constructor(private _httpClient: HttpClient) { }
    
    getEmployeeDetailsObservable() {
        return this._httpClient.get("http://localhost:3000/employees");
    }
    
    deleteEmployee(employeeId: any) {
        return this._httpClient.delete("http://localhost:3000/employees/" + employeeId);
    }
    
    addEmployee(userName: any, userId: any) {
        return this._httpClient.post("http://localhost:3000/employees/", {
            name: userName,
            id: userId,
            createdAt: "Yesterday",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
        });
    }
    
    
    getEmployeeDetailsAndNotify() {
        debugger;
        return this._httpClient.get("http://localhost:3000/employees").subscribe((response: any) => {
            this.employeeList = response;
            this.employeeListUpdateEvent.emit();
        });
    }
}