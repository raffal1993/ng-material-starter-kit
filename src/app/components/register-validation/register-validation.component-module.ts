import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { RegisterValidationComponent } from './register-validation.component';
import { ErrorPasswordPipe } from 'src/app/pipes/error-password.pipe';
import { ErrorPasswordsMatchPipe } from 'src/app/pipes/error-passwords-match.pipe';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatCardModule,
  ],
  declarations: [RegisterValidationComponent, ErrorPasswordPipe, ErrorPasswordsMatchPipe],
  providers: [],
  exports: [RegisterValidationComponent],
})
export class RegisterValidationComponentModule {}
