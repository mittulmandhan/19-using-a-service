import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  // copy of employees object is created in order to access the object
  public employees = [
    { id: 1, name: 'sagar', age: 30 },
    { id: 2, name: 'rahul', age: 20 },
    { id: 3, name: 'simran', age: 24 },
    { id: 4, name: 'yogesh', age: 75 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
