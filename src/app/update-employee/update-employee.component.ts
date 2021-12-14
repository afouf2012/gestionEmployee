import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id!: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee=data;
        console.log(data);
      },
      error => console.log(error)
    );
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => this.goToListEmployee(),
      eroor => console.log(eroor)
    );
  }

  goToListEmployee(){
    this.router.navigate(['/employees']);
  }

}
