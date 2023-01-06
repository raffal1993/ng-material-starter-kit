import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { BeersComponent } from './components/beers/beers.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { BeersComponentModule } from './components/beers/beers.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'route-limit-single-products', component: ProductsComponent },
      { path: 'route-pagination-beers', component: BeersComponent },
    ]),
    ProductsComponentModule,
    BeersComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
