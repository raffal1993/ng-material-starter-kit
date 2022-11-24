import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, of, combineLatest, map } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-sorted-product-list',
  templateUrl: './sorted-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortedProductListComponent {
  constructor(private _productsService: ProductsService) {}

  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'asc'
  );
  public order$: Observable<string> = this._orderSubject.asObservable();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.order$,
  ]).pipe(
    map(([products, order]: [ProductModel[], string]) => {
      return products.sort((a, b) => {
        if (a.price > b.price) return order === 'asc' ? 1 : -1;
        if (a.price < b.price) return order === 'desc' ? 1 : -1;
        return 0;
      });
    })
  );

  public orders: Observable<string[]> = of(['asc', 'desc']);

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
