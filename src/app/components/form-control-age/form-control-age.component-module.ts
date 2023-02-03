import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormControlAgeComponent } from './form-control-age.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  declarations: [FormControlAgeComponent],
  providers: [],
  exports: [FormControlAgeComponent],
})
export class FormControlAgeComponentModule {}
