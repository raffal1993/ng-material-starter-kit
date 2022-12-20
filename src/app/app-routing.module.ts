import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { UniversitiesComponentModule } from './components/universities/universities.component-module';
import { UniversitiesServiceModule } from './services/universities.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'universities', component: UniversitiesComponent },
    ]),
    ProductsComponentModule,
    ProductsServiceModule,
    UniversitiesComponentModule,
    UniversitiesServiceModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
