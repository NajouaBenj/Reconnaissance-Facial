import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employeList: any;
  employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees(){
    this.employeeService.getEmployees().subscribe(data=>{
      this.employeList=data;
    })

  }

  delete(ide:number){
    this.employeeService.deleteEmployee(ide).subscribe(data=>{
      console.log(data)
      this.getEmployees();
    })
  }

  update(ide: number){
    this.router.navigate(['update-employee',ide]);
  }

}
