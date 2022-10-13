import { Component } from "@angular/core";

@Component({
    selector: "app-employee-listing",
    template: `
        <h2>Welcome to Angular Session</h2>
        <h3>This is a sample Angular Application</h3>
        <h4>This is Easiest possible Component created in Angular<h4>
        <h5>This component need to be added to the module and registered in bootstrap property of module</h5>`,
    styles: ["h3 { color: aqua }", "h2 {color: red }", "h4 { color: green }", "h5 { color: grey }"]
})
export default class EmployeeListingComponent { }