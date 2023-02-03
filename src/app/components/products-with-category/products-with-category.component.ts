import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { concatMap, Observable, scan, shareReplay } from 'rxjs';
import { ProductWithCategoryQueryModel } from 'src/app/query-models/product-with-category.query-model';
import { ProductsWithCategoryService } from '../../services/products-with-category.service';

@Component({
  selector: 'app-products-with-category',
  templateUrl: './products-with-category.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsWithCategoryComponent {
  readonly products$: Observable<Observable<ProductWithCategoryQueryModel>[]> =
    this._productsWithCategoryService.getAll().pipe(
      shareReplay(1),
      concatMap((products) =>
        products.map((product) => this._productsWithCategoryService.getProductCard(product))
      ),
      scan((acc: Observable<ProductWithCategoryQueryModel>[], curr) => [...acc, curr], [])
    );

  //   readonly products$: Observable<Observable<ProductWithCategoryQueryModel>[]> = concat(
  //     this.reqProducts$
  //   ).pipe();

  constructor(private _productsWithCategoryService: ProductsWithCategoryService) {}

  ngOnInit(): void {
    this.products$.subscribe((data) => console.log(data));
  }
}
