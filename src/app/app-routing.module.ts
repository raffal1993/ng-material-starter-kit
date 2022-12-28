import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { BeersComponent } from './components/beers/beers.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { UniversitiesComponentModule } from './components/universities/universities.component-module';
import { UniversitiesServiceModule } from './services/universities.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { BeersComponentModule } from './components/beers/beers.component-module';
import { BeersServiceModule } from './services/beers.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'universities', component: UniversitiesComponent },
      { path: 'crypto-autocomplete', component: CryptoComponent },
      { path: 'beers', component: BeersComponent },
    ]),
    ProductsComponentModule,
    ProductsServiceModule,
    UniversitiesComponentModule,
    UniversitiesServiceModule,
    CryptoComponentModule,
    CryptoServiceModule,
    BeersComponentModule,
    BeersServiceModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
