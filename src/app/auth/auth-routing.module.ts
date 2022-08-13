import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
const routes: Routes = [{
  path: 'sign-in',
  component: SignInComponent,
  data: {
    title: 'SignIn'
  }
},
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {
      title: 'SignUp'
    }
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
