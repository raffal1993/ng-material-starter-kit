import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CryptoCurrencyComponent } from './components/crypto-currency/crypto-currency.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { CryptoCurrencyComponentModule } from './components/crypto-currency/crypto-currency.component-module';
import { CryptoCurrencyServiceModule } from './services/crypto-currency.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products-master-details', component: ProductListComponent },
      { path: 'employees-master-details', component: EmployeesComponent },
      { path: 'crypto-master-details', component: CryptoCurrencyComponent },
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    EmployeesComponentModule,
    EmployeeServiceModule,
    CryptoCurrencyComponentModule,
    CryptoCurrencyServiceModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
