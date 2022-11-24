import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { CategoryModel } from '../../models/category.model';

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredProductListComponent {
  constructor(
    private _categoriesService: CategoriesService,
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  public categories$: Observable<CategoryModel[]> =
    this._categoriesService.getAll();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this._activatedRoute.params,
  ]).pipe(
    map(([products, params]: [ProductModel[], Params]) => {
      return products.filter(
        (product: ProductModel) => product.category === params['category']
      );
    })
  );
}
