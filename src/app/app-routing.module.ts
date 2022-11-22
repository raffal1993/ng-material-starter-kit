import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cat-fact', component: CatFactComponent },
    ]),
    ProductDetailComponentModule,
    ProductServiceModule,
    CatFactComponentModule,
    CatFactServiceModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
