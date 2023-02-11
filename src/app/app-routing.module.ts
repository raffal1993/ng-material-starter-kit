import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthPersistentComponent } from './components/auth-persistent/auth-persistent.component';
import { AuthPersistentLoggedInComponent } from './components/auth-persistent-logged-in/auth-persistent-logged-in.component';
import { AuthPersistentComponentModule } from './components/auth-persistent/auth-persistent.component-module';
import { AuthPersistentLoggedInComponentModule } from './components/auth-persistent-logged-in/auth-persistent-logged-in.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'auth-persistent/login', component: AuthPersistentComponent },
      { path: 'auth-persistent/logged-in', component: AuthPersistentLoggedInComponent },
    ]),
    AuthPersistentComponentModule,
    AuthPersistentLoggedInComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
