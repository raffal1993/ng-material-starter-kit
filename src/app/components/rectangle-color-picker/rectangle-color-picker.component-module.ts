import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ColorValidatorDirectiveModule } from '../../directives/color-validator/color-validator.directive-module';
import { RectangleColorPickerComponent } from './rectangle-color-picker.component';

@NgModule({
  imports: [CommonModule, ColorValidatorDirectiveModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [RectangleColorPickerComponent],
  providers: [],
  exports: [RectangleColorPickerComponent],
})
export class RectangleColorPickerComponentModule { }
