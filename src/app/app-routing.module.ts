import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginUserComponentModule } from './components/login-user/login-user.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { LoginAdminComponentModule } from './components/login-admin/login-admin.component-module';
import { AdminComponentModule } from './components/admin/admin.component-module';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login-user', component: LoginUserComponent },
      { path: 'logged-in', component: LoggedInComponent },
      { path: 'login-admin', component: LoginAdminComponent },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
        data: {
          redirectUrl: '/logged-in',
        },
      },
    ]),
    LoginUserComponentModule,
    LoggedInComponentModule,
    LoginAdminComponentModule,
    AdminComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
