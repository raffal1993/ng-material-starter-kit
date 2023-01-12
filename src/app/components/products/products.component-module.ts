import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [MatExpansionModule, CommonModule],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent]
})
export class ProductsComponentModule {
}
