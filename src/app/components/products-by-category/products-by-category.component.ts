import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
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

  private _selectedCategorySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public selectedCategory$: Observable<string> =
    this._selectedCategorySubject.asObservable();

  readonly products$: Observable<ProductModel[]> = this.selectedCategory$.pipe(
    switchMap((category) =>
      this._productsService.getProductsByCategory(category)
    )
  );

  onSelect(category: string): void {
    this._selectedCategorySubject.next(category);
  }

  constructor(
    private _categoriesService: CategoriesService,
    private _productsService: ProductsService
  ) {}
}
