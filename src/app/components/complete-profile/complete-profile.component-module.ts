import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CompleteProfileComponent } from './complete-profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthLoginInterceptor } from 'src/app/interceptors/auth-login.interceptor.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [CompleteProfileComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthLoginInterceptor, multi: true }],
  exports: [CompleteProfileComponent],
})
export class CompleteProfileComponentModule {}
