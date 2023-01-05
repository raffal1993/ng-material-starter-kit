import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsDifComponent } from './components/cars-dif/cars-dif.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { JobsComponentModule } from './components/jobs/jobs.component-module';
import { ProductsByCategoryComponentModule } from './components/products-by-category/products-by-category.component-module';
import { CarsComponentModule } from './components/cars/cars.component-module';
import { CarsDifComponentModule } from './components/cars-dif/cars-dif.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'list-2-route-sort-single-products-backend', component: ProductsComponent },
      { path: 'search-route-multi-jobs', component: JobsComponent },
      { path: 'products', component: ProductsByCategoryComponent },
      { path: 'products/:category', component: ProductsByCategoryComponent },
      { path: 'list-2-route-filter-multi-cars-frontend', component: CarsComponent },
      { path: 'car-diff', component: CarsDifComponent },
    ]),
    ProductsComponentModule,
    JobsComponentModule,
    ProductsByCategoryComponentModule,
    CarsComponentModule,
    CarsDifComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
