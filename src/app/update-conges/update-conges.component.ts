import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Conges } from '../conges';
import { CongesService } from '../conges.service';

@Component({
  selector: 'app-update-conges',
  templateUrl: './update-conges.component.html',
  styleUrls: ['./update-conges.component.scss']
})
export class UpdateCongesComponent implements OnInit {

  
  conges: Conges = new Conges();
  id!: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private congeService: CongesService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.congeService.getCongesById(this.id).subscribe(
      data => {
        this.conges=data;
        console.log(data);
      },
      error => console.log(error)
    );
  }

  onSubmit(){
    this.congeService.updateConges(this.id, this.conges).subscribe(
      data => this.goToListConge(),
      eroor => console.log(eroor)
    );
  }

  goToListConge(){
    this.router.navigate(['/conges']);
  }

}
