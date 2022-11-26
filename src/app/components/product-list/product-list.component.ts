import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
  constructor(private _productsService: ProductsService) {}

  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(
    void 0
  );
  public refresh$: Observable<void> = this._refreshSubject.asObservable();

  readonly refreshedList$: Observable<ProductModel[]> = this.refresh$.pipe(
    switchMap(() => this._productsService.getAll())
  );

  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();

  delete(id: number): void {
    this._productsService
      .deleteProduct(id)
      .subscribe(() => this._refreshSubject.next());
  }
}
