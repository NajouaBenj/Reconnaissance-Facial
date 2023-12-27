import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee =  new Employee();
  constructor(private employeeService:EmployeeService, private router:Router){}

  ngOnInit(): void {
  }

  OnSubmit():void{
    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(
      data => {
        console.log(this.employee)
        this.goToEmployeesList();
      },
      error => console.log(error)
    );
  }

  goToEmployeesList() {
    this.router.navigate(["list-employee"]);
  }
}
