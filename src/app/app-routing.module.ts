import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { AuthLoggedGuard } from './guards/auth-logged-in.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthLoginGuard],
        data: {
          redirectToLoggedIn: '/logged-in',
        },
      },
      {
        path: 'logged-in',
        component: LoggedInComponent,
        canActivate: [AuthLoggedGuard],
        data: {
          redirectToLogin: '/login',
        },
      },
    ]),
    LoginComponentModule,
    LoggedInComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
