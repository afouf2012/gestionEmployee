import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./login.component-front.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login();
  nAuth: boolean= false;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.nAuth= false;
    this.authService.signIn(this.login.login, this.login.password);
    if(this.authService.isAuth)
      this.router.navigate(['/employees']);
    else{
      this.login = new Login();
      this.router.navigate(['/login']);
      this.nAuth= true;
    }
  }

}
