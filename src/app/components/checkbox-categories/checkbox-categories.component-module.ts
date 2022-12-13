import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CheckboxCategoriesComponent } from './checkbox-categories.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CheckboxCategoriesComponent],
  providers: [],
  exports: [CheckboxCategoriesComponent]
})
export class CheckboxCategoriesComponentModule {
}
