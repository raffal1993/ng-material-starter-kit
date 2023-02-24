import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUserComponentModule } from './components/login-user/login-user.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { LoginAdminComponentModule } from './components/login-admin/login-admin.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login-user', component: LoginUserComponent },
      { path: 'logged-in', component: LoggedInComponent },
      { path: 'login-admin', component: LoginAdminComponent },
    ]),
    LoginUserComponentModule,
    LoggedInComponentModule,
    LoginAdminComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
