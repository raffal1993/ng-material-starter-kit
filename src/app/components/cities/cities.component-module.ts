import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { CitiesComponent } from './cities.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule,
    FlexModule,
    MatFormFieldModule,
    RouterModule,
    MatSelectModule,
  ],
  declarations: [CitiesComponent],
  providers: [],
  exports: [CitiesComponent],
})
export class CitiesComponentModule {}
