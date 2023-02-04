import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { UserIsLoggedInComponent } from './components/user-is-logged-in/user-is-logged-in.component';
import { AuthSinglePageComponent } from './components/auth-single-page/auth-single-page.component';
import { AuthSinglePageBeComponent } from './components/auth-single-page-be/auth-single-page-be.component';
import { AccessDeniedComponentModule } from './components/access-denied/access-denied.component-module';
import { AuthSinglePageComponentModule } from './components/auth-single-page/auth-single-page.component-module';
import { UserIsLoggedInComponentModule } from './components/user-is-logged-in/user-is-logged-in.component-module';
import { AuthSinglePageBeComponentModule } from './components/auth-single-page-be/auth-single-page-be.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'error', component: AccessDeniedComponent },
      { path: 'success', component: UserIsLoggedInComponent },
      { path: 'auth-single-page', component: AuthSinglePageComponent },
      { path: 'auth-single-page-be', component: AuthSinglePageBeComponent },
    ]),
    AccessDeniedComponentModule,
    AuthSinglePageComponentModule,
    UserIsLoggedInComponentModule,
    AuthSinglePageBeComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
