import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { LOGIN } from './.cle';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth = false;
  testLogin = LOGIN;

  signIn(login: string, password: string){
    if (login == this.testLogin.login && password == this.testLogin.password){
      this.isAuth = true;
    }
  }

  logOut(){
    this.isAuth = false;
  }
}
