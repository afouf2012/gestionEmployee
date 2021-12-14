import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
   
    this.employeeService.getEmployeeList().subscribe(
      data =>{
        this.employees = data;
      }
    );
  }

  private getAllEmployees(): void{
    this.employeeService.getEmployeeList().subscribe(
      data => this.employees=data,
      error => console.log(error)
    );
  }

  detailsEmployee(id: number | undefined){
    this.router.navigate(['details-employee', id])

  }

  updateEmployee(id: number | undefined){
    this.router.navigate(['update-employee', id])
  }

  deleteEmployee(id: number | undefined){
    this.employeeService.deleteEmployee(id).subscribe(
      data => this.getAllEmployees(),
      error => console.log(error)
    );
  }
}
