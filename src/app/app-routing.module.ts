import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { RegisterComponent } from './components/register/register.component';
import { RegisterComponentModule } from './components/register/register.component-module';
import { VerifyComponent } from './components/verify/verify.component';
import { VerifyComponentModule } from './components/verify/verify.component-module';
import { AuthEmailNotVerified } from './guards/auth-email-not-verified.guard';
import { AuthEmailVerified } from './guards/auth-email-verified.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
      },
      { path: 'register', component: RegisterComponent },
      {
        path: 'logged-in',
        component: LoggedInComponent,
        canActivate: [AuthEmailNotVerified],
        data: {
          redirectToLogin: '/login',
          redirectToVerify: '/verify',
        },
      },
      {
        path: 'verify',
        component: VerifyComponent,
        canActivate: [AuthEmailVerified],
        data: {
          redirectToLogin: '/login',
          redirectToLoggedIn: '/logged-in',
        },
      },
    ]),
    LoginComponentModule,
    LoggedInComponentModule,
    RegisterComponentModule,
    VerifyComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
