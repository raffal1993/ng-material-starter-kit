import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { AuthLoggedGuard } from './guards/auth-logged.guard';
import { LoggedInSubPageComponent } from './components/logged-in-sub-page/logged-in-sub-page.component';
import { LoggedInSubPageComponentModule } from './components/logged-in-sub-page/logged-in-sub-page.component-module';
import { AuthGuard } from './guards/auth.guard';
import { AuthSubPathsGuard } from './guards/auth-sub-paths.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'auto-login/logged-in',
        // canActivate: [AuthLoggedGuard],
        // canActivate: [AuthGuard],
        canActivateChild: [AuthSubPathsGuard],
        data: {
          redirectToLogin: 'auto-login/login',
        },
        children: [
          {
            path: '',
            component: LoggedInComponent,
          },
          {
            path: 'sub-route',
            component: LoggedInSubPageComponent,
          },
        ],
      },
      {
        path: 'auto-login/login',
        component: LoginComponent,
        // canActivate: [AuthLoginGuard],
        canActivate: [AuthGuard],
        data: {
          redirectToLogged: 'auto-login/logged-in',
          page: 'login',
        },
      },
    ]),
    LoggedInComponentModule,
    LoginComponentModule,
    LoggedInSubPageComponentModule,
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
