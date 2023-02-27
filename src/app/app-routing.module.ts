import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { CompleteProfileComponentModule } from './components/complete-profile/complete-profile.component-module';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { AuthProfileGuard } from './guards/auth-profile.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      {
        path: 'logged-in',
        component: LoggedInComponent,
        canActivate: [AuthLoginGuard, AuthProfileGuard],
        data: {
          redirectToCompleteProfile: 'complete-profile',
          redirectToLogin: 'login',
        },
      },
      { path: 'complete-profile', component: CompleteProfileComponent },
    ]),
    LoggedInComponentModule,
    LoginComponentModule,
    CompleteProfileComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
