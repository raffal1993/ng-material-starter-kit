import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterValidationComponent } from './components/register-validation/register-validation.component';
import { RegisterValidationComponentModule } from './components/register-validation/register-validation.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'auth-single-page', component: RegisterValidationComponent }]),
    RegisterValidationComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
