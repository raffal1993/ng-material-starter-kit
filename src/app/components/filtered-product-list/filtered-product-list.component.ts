import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable, Subject } from 'rxjs';
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

  private _categorySubject: Subject<string> = new Subject<string>();

  public category$: Observable<string> = this._categorySubject.asObservable();

  public categories$: Observable<CategoryModel[]> =
    this._categoriesService.getAll();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.category$,
  ]).pipe(
    map(([products, category]: [ProductModel[], string]) => {
      return products.filter(
        (product: ProductModel) => product.category === category
      );
    })
  );

  changeCategory(category: string) {
    this._categorySubject.next(category);
  }
}
