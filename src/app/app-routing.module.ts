import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeComponentModule } from './components/employee/employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductComponent },
      { path: 'create-employee', component: EmployeeComponent },
    ]),
    ProductComponentModule,
    ProductServiceModule,
    EmployeeComponentModule,
    EmployeeServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
