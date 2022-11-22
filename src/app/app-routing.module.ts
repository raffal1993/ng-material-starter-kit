import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cat-fact', component: CatFactComponent },
      { path: 'age/:name', component: AgePredictionComponent },
    ]),
    ProductDetailComponentModule,
    ProductServiceModule,
    CatFactComponentModule,
    CatFactServiceModule,
    AgePredictionComponentModule,
    AgePredictionServiceModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
