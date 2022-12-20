import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { UniversitiesComponentModule } from './components/universities/universities.component-module';
import { UniversitiesServiceModule } from './services/universities.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'universities', component: UniversitiesComponent },
      { path: 'crypto-autocomplete', component: CryptoComponent },
    ]),
    ProductsComponentModule,
    ProductsServiceModule,
    UniversitiesComponentModule,
    UniversitiesServiceModule,
    CryptoComponentModule,
    CryptoServiceModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
