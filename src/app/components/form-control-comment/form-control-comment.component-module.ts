import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControlCommentComponent } from './form-control-comment.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  declarations: [FormControlCommentComponent],
  providers: [],
  exports: [FormControlCommentComponent],
})
export class FormControlCommentComponentModule { }
