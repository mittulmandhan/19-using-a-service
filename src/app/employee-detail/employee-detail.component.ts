import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  // we declared a private local variable _employeeService that gives us an instance of EmployeeService
  constructor(private _employeeService: EmployeeService) { }
  // now that we have instance of EmployeeService now we ae going to use this instance to fetch the employee data
  // and the code for that goes inside the ngOnInit() life cycle  hook
  // ngOnInit() hook gets called once the component has been initialized

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
