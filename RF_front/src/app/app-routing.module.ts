import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path:"signin",component: SignInComponent},
  { path:"signup",component: SignUpComponent},
  { path:"add-employee",component: AddEmployeeComponent},
  { path:"list-employee",component: ListEmployeeComponent},
  { path:"update-employee",component: UpdateEmployeeComponent},
  { path: '', redirectTo: 'signin', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
