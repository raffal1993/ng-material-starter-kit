import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyComponent } from './components/verify/verify.component';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { VerifyComponentModule } from './components/verify/verify.component-module';
import { AuthProfileGuard } from './guards/verify-email.guard';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { CompleteProfileComponentModule } from './components/complete-profile/complete-profile.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'logged-in',
        component: LoggedInComponent,
        canActivate: [AuthProfileGuard],
        data: {
          redirectToVerify: '/verify',
        },
      },
      { path: 'login', component: LoginComponent },
      { path: 'verify', component: VerifyComponent },
      { path: 'complete-profile', component: CompleteProfileComponent },
    ]),
    LoggedInComponentModule,
    LoginComponentModule,
    VerifyComponentModule,
    CompleteProfileComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
