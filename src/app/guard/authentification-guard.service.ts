import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthentificationService} from "../service/authentification.service";

@Injectable()
export class AuthentificationGuardService implements CanActivate{

  constructor(private authentificationService: AuthentificationService) { }

  canActivate(): boolean {
   return this.authentificationService.authenticated;
  }
}

