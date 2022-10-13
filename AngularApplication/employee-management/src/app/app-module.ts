import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import EmployeeListingComponent from "./employee-listing/employee-listing-component";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailsTimeComponent } from "./employee-details-time/employee-details-time.component";

@NgModule({
    declarations: [EmployeeListingComponent, EmployeeDetailsComponent,EmployeeDetailsTimeComponent],
    imports: [ BrowserModule ],
    bootstrap: [EmployeeDetailsTimeComponent]
})
export default class AppModule { }