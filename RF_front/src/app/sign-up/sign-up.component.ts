import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private authService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }

  annuler(){
      this.router.navigateByUrl('/signin');

  }
  save(user:any){
    this.authService.signUp(user).subscribe(resp=>{
      this.router.navigateByUrl('/signin');
    },error => console.log(error));
  }

}
