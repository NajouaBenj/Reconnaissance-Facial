import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';
import { EmployeeService } from '../services/employee.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  // @ts-ignore
  ide:number;
  constructor(private employeeService:EmployeeService,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ide=this.activatedRoute.snapshot.params['ide'];
    this.employeeService.getEmployeeById(this.ide).subscribe(data=>{
      this.employee=data;
    },error => console.log(error));
  }

  onSumit(){
    this.employeeService.updateEmployee(this.ide,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(["list-employee"]);
  }

}