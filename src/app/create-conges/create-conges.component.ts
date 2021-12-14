import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conges } from '../conges';
import { CongesService } from '../conges.service';

@Component({
  selector: 'app-create-conges',
  templateUrl: './create-conges.component.html',
  styleUrls: ['./create-conges.component.scss']
})
export class CreateCongesComponent implements OnInit {
  conges: Conges = new Conges();

  constructor(private router: Router,private congesService:CongesService) { }

  ngOnInit(): void {
  }

  saveEmplyee(){
    this.congesService.createConges(this.conges).subscribe(
      data =>{
        console.log(data);
        this.goToCongeList();
      },
      error =>{
        console.log(error);
      }
    )
  }

  goToCongeList(){
    this.router.navigate(['/conges']);
  }

  onSubmit(){
    console.log(this.conges);
    this.saveEmplyee();
  }
}

