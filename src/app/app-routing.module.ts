import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthMultiRouteComponent } from './components/auth-multi-route/auth-multi-route.component';
import { AuthMultiRouteLoggedInComponent } from './components/auth-multi-route-logged-in/auth-multi-route-logged-in.component';
import { AuthMultiRouteComponentModule } from './components/auth-multi-route/auth-multi-route.component-module';
import { AuthMultiRouteLoggedInComponentModule } from './components/auth-multi-route-logged-in/auth-multi-route-logged-in.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'auth-multi-page/login', component: AuthMultiRouteComponent },
      { path: 'auth-multi-page/logged-in', component: AuthMultiRouteLoggedInComponent },
    ]),
    AuthMultiRouteComponentModule,
    AuthMultiRouteLoggedInComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
