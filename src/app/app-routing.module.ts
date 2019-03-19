import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ArbeitgeberPageComponent} from "./arbeitgeber-page/arbeitgeber-page.component";
import {BeziehungenPageComponent} from "./beziehungen-page/beziehungen-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthentificationGuardService as AuthGuard} from "./guard/authentification-guard.service";

const routes: Routes = [
  {path:'', redirectTo:'login-page', pathMatch:'full'},
  {path:'login-page', component: LoginPageComponent},
  {path:'home-page', component: HomePageComponent, canActivate:[AuthGuard], },
  {path:'arbeitgeber-page', component: ArbeitgeberPageComponent, canActivate:[AuthGuard]},
  {path:'beziehungen-page', component: BeziehungenPageComponent, canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
