import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public host:string="http://localhost:8080/employees"

  constructor(private httpClient:HttpClient){

  }

  public getEmployees(){
      return this.httpClient.get(this.host);
  }

  addEmployee(employee:Employee):Observable<Object>{
      return this.httpClient.post(this.host,employee);
  }

  deleteEmployee(ide:number):Observable<Object>{
      return this.httpClient.delete(this.host+'/'+ide);
    }
  
    updateEmployee(ide : number, employee:Employee): Observable<Object> {
      return this.httpClient.patch(this.host + '/' + ide, employee);
    }
  
    getEmployeeById(ide : number): Observable<Employee> {
      return this.httpClient.get<Employee>(this.host + '/' + ide);
    }
}
