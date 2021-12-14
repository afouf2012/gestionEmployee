import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './employee.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CreateCongesComponent } from './create-conges/create-conges.component';
import { CongesDetailsComponent } from './conges-details/conges-details.component';
import { CongesListComponent } from './conges-list/conges-list.component';
import { SalaireListComponent } from './salaire-list/salaire-list.component';
import { SalaireDetailsComponent } from './salaire-details/salaire-details.component';
import { CreateSalaireComponent } from './create-salaire/create-salaire.component';
import { UpdateCongesComponent } from './update-conges/update-conges.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    MenuComponent,
    CreateCongesComponent,
    CongesDetailsComponent,
    CongesListComponent,
    SalaireListComponent,
    SalaireDetailsComponent,
    CreateSalaireComponent,
    UpdateCongesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
