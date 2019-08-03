import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // this is a hard coded array of employees
  // each employee has id, name and age

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
