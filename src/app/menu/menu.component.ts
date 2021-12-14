import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title = 'Gestion Employee : Agular 11 Spring Boot CRUD Full Stack Application';
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authservice.logOut();
    this.router.navigate(['/login'])
  }
}
