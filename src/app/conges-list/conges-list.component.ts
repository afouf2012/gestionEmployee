import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conges } from '../conges';
import { CongesService } from '../conges.service';

@Component({
  selector: 'app-conges-list',
  templateUrl: './conges-list.component.html',
  styleUrls: ['./conges-list.component.scss']
})
export class CongesListComponent implements OnInit {
  conges: Conges[] = [];

  constructor(private router: Router,private congesService:CongesService) { }

  ngOnInit(): void {
   this.getAllConges();
  }

  private getAllConges(): void{
    this.congesService.getCongesList().subscribe(
      data => this.conges=data,
      error => console.log(error)
    );
  }

  detailsConges(id: number | undefined){
    this.router.navigate(['details-Conges', id])

  }

  updateConges(id: number | undefined){
    this.router.navigate(['update-Conges', id])
  }

  deleteConges(id: number | undefined){
    this.congesService.deleteConges(id).subscribe(
      data => this.getAllConges(),
      error => console.log(error)
    );
  }
}

