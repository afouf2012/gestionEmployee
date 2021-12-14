import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CongesDetailsComponent } from './conges-details/conges-details.component';
import { CongesListComponent } from './conges-list/conges-list.component';
import { CreateCongesComponent } from './create-conges/create-conges.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateCongesComponent } from './update-conges/update-conges.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},   
  
  {path: '', component: MenuComponent, canActivate: [AuthGuardService], children:[
    {path: 'employees', component: EmployeeListComponent},
    {path: 'create-employee', component: CreateEmployeeComponent},
    {path: '',redirectTo: 'employees', pathMatch: 'full'},
    {path: 'update-employee/:id', component: UpdateEmployeeComponent},
    {path: 'details-employee/:id', component: EmployeeDetailsComponent},
    {path:'conges',component:CongesListComponent},
    {path:'create-conges',component:CreateCongesComponent},
    {path: 'update-Conges/:id', component: UpdateCongesComponent},
    {path:'details-conges',component:CongesDetailsComponent}
  ]},
  {path: '**', redirectTo: 'employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
