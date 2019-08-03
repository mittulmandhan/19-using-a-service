import { Injectable } from '@angular/core';

// injectable decorator tells angular that the given class is a service and some component are dependent upon it
// it also tells angular that this service itself have injected dependencies
// it required when u are injecting a service into another service
// if u remove injectable decorator then this class will be a plain text class i.e. not related to angular anymore
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // object provider funtion defined
  getEmployees() {
    return [
      { id: 1, name: 'sagar', age: 30 },
      { id: 2, name: 'rahul', age: 20 },
      { id: 3, name: 'simran', age: 24 },
      { id: 4, name: 'yogesh', age: 75 }
    ];
  }
  constructor() { }
}
