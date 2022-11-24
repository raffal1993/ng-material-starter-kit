import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products/:category', component: FilteredProductListComponent },
      { path: 'products', component: FilteredProductListComponent },
      { path: 'sorted-products', component: SortedProductListComponent },
      { path: 'employees', component: EmployeesComponent }
    ]),
    FilteredProductListComponentModule,
    CategoriesServiceModule,
    ProductsServiceModule,
    SortedProductListComponentModule,
    EmployeesComponentModule,
    EmployeeServiceModule
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule { }
