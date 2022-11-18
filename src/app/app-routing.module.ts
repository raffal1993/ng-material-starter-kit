import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeComponentModule } from './components/employee/employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterComponentModule } from './components/register/register.component-module';
import { RegisterServiceModule } from './services/register.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductComponent },
      { path: 'create-employee', component: EmployeeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]),
    ProductComponentModule,
    ProductServiceModule,
    EmployeeComponentModule,
    EmployeeServiceModule,
    LoginComponentModule,
    LoginServiceModule,
    RegisterComponentModule,
    RegisterServiceModule
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule { }
