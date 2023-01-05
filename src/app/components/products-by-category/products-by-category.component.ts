import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsByCategoryComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();

  readonly selectedCategory$: Observable<string> =
    this._activatedRoute.params.pipe(map((param) => param['category']));

  readonly products$: Observable<ProductModel[]> = this.selectedCategory$.pipe(
    switchMap((category) =>
      this._productsService.getProductsByCategory(category)
    )
  );

  constructor(
    private _categoriesService: CategoriesService,
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
