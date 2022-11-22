import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
