import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { ProductsByCategoryComponent } from './products-by-category.component';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
    MatListModule,
    FlexModule,
  ],
  declarations: [ProductsByCategoryComponent],
  providers: [],
  exports: [ProductsByCategoryComponent],
})
export class ProductsByCategoryComponentModule {}
