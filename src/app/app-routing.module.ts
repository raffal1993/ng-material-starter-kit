import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { ProductsWithCategoryComponent } from './components/products-with-category/products-with-category.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { OrganizationsComponentModule } from './components/organizations/organizations.component-module';
import { ProductsWithCategoryComponentModule } from './components/products-with-category/products-with-category.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'query-single-nested-accordion-products-with-metadatas',
        component: ProductsComponent,
      },
      { path: 'query-multi-nested-accordion-orgs', component: OrganizationsComponent },
      {
        path: 'query-single-nested-kist-products-with-categories',
        component: ProductsWithCategoryComponent,
      },
    ]),
    ProductsComponentModule,
    OrganizationsComponentModule,
    ProductsWithCategoryComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
