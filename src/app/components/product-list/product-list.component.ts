import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { combineLatest, map, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private _selectedProductDetailsSubject: Subject<{
    id: number;
    category: string;
  }> = new Subject<{ id: number; category: string }>();

  public selectedProductDetails$: Observable<{
    id: number;
    category: string;
  }> = this._selectedProductDetailsSubject.asObservable();

  constructor(private _productsService: ProductsService) {}

  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();

  readonly productDetails$: Observable<ProductModel | null> =
    this._selectedProductDetailsSubject.pipe(
      switchMap((details) => this._productsService.getOne(details.id))
    );

  /* readonly categoriesByProduct$: Observable<ProductModel[] | null> =
    this._selectedProductDetailsSubject.pipe(
      switchMap((details) =>
        this.products$.pipe(
          map((products) =>
            products.filter((prod) => prod.category === details.category)
          )
        )
      )
    );*/

  readonly categoriesByProduct$: Observable<string[] | null> = combineLatest([
    this.products$,
    this.selectedProductDetails$,
  ]).pipe(
    map(([products, details]) =>
      products
        .filter((prod) => prod.category === details.category)
        .map((prod) => prod.title)
    )
  );

  selectProduct(id: number, category: string) {
    this._selectedProductDetailsSubject.next({ id, category });
  }
}
