import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { CarsComponent } from './components/cars/cars.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { JobsComponentModule } from './components/jobs/jobs.component-module';
import { ProductsByCategoryComponentModule } from './components/products-by-category/products-by-category.component-module';
import { CarsComponentModule } from './components/cars/cars.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'list-2-route-sort-single-products-backend',
        component: ProductsComponent,
      },
      { path: 'search-route-multi-jobs', component: JobsComponent },
      { path: 'products', component: ProductsByCategoryComponent },
      {
        path: 'list-2-route-filter-multi-cars-frontend',
        component: CarsComponent,
      },
    ]),
    ProductsComponentModule,
    JobsComponentModule,
    ProductsByCategoryComponentModule,
    CarsComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
