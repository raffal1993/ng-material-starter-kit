import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'refresh-products', component: ProductListComponent },
      { path: 'employees', component: EmployeesComponent },
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    EmployeesComponentModule,
    EmployeeServiceModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
