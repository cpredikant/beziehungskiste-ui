import { Injectable } from '@angular/core';
import {User} from "../model/user";

@Injectable()
export class AuthentificationService {

  user: User;

  authenticated: boolean;

  constructor() {
    this.authenticated=false;
  }

  authentificate(userName: string, password: string): void {
    if (userName === 'test' && password === 'test1234'){
      this.user = {firstName:'Christian', lastName:'Predikant', userName: 'test'};
      this.authenticated = true;
      console.log('User authenticated');
    }
  }
}
