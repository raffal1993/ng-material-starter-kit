import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLoggedInComponent } from './components/auth-logged-in/auth-logged-in.component';
import { AuthLoginComponentModule } from './components/auth-login/auth-login.component-module';
import { AuthLoggedInComponentModule } from './components/auth-logged-in/auth-logged-in.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'auth-multi-page/login', component: AuthLoginComponent }, { path: 'auth-multi-page/logged-in', component: AuthLoggedInComponent }]),
    AuthLoginComponentModule,
    AuthLoggedInComponentModule
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule { }
