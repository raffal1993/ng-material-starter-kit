import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormControlEmailComponent } from './form-control-email.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  declarations: [FormControlEmailComponent],
  providers: [],
  exports: [FormControlEmailComponent],
})
export class FormControlEmailComponentModule {}
