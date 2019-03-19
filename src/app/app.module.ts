import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArbeitgeberPageComponent } from './arbeitgeber-page/arbeitgeber-page.component';
import { BeziehungenPageComponent } from './beziehungen-page/beziehungen-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

import {AuthentificationService} from "./service/authentification.service";
import {ArbeitgeberService} from "./service/arbeitgeber.service";
import {AuthentificationGuardService} from "./guard/authentification-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    ArbeitgeberPageComponent,
    HomePageComponent,
    BeziehungenPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArbeitgeberService, AuthentificationService, AuthentificationGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
