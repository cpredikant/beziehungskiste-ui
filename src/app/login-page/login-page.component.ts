import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService:AuthentificationService) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {

  }

  public login(): void {
    this.authService.authentificate(this.username, this.password);
    this.password='';
  }

  public logout(): void {
    this.authService.authenticated=false;
  }

  public isLoggedIn(): boolean {
    console.log(this.authService.authenticated);
    return this.authService.authenticated;
  }

}
