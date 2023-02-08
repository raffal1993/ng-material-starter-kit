import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponentModule } from './components/authentication/authentication.component-module';
import { HomeComponentModule } from './components/home/home.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'auth-single-page', component: AuthenticationComponent },
      { path: '', component: HomeComponent },
    ]),
    AuthenticationComponentModule,
    HomeComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
