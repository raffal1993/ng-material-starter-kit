import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { concat, map, Observable, shareReplay } from 'rxjs';
import { ProductWithCategoryQueryModel } from 'src/app/query-models/product-with-category.query-model';
import { ProductsWithCategoryService } from '../../services/products-with-category.service';

@Component({
  selector: 'app-products-with-category',
  templateUrl: './products-with-category.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsWithCategoryComponent {
  readonly reqProducts$: Observable<Observable<ProductWithCategoryQueryModel>[]> =
    this._productsWithCategoryService.getAll().pipe(
      shareReplay(1),
      map((products) =>
        products.map((product) => this._productsWithCategoryService.getProductCard(product))
      )
    );

  readonly products$: Observable<Observable<ProductWithCategoryQueryModel>[]> = concat(
    this.reqProducts$
  ).pipe();

  constructor(private _productsWithCategoryService: ProductsWithCategoryService) {}
}
