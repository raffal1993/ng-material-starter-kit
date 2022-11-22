import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'product/:id', component: ProductDetailComponent },
    ]),
    ProductDetailComponentModule,
    ProductServiceModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
