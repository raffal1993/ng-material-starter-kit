import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ProductsWithCategoryComponent } from './products-with-category.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatChipsModule],
  declarations: [ProductsWithCategoryComponent],
  providers: [],
  exports: [ProductsWithCategoryComponent],
})
export class ProductsWithCategoryComponentModule {}
