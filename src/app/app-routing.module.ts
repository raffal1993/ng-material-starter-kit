import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { LoginComponentModule } from './components/login/login.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'logged-in', component: LoggedInComponent },
      { path: 'login', component: LoginComponent },
    ]),
    LoggedInComponentModule,
    LoginComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
