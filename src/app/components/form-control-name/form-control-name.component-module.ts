import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormControlNameComponent } from './form-control-name.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  declarations: [FormControlNameComponent],
  providers: [],
  exports: [FormControlNameComponent],
})
export class FormControlNameComponentModule {}
