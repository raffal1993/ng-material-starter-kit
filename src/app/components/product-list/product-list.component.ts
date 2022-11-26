import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  constructor(private _productsService: ProductsService) {}

  private _selectedProductIdSubject: Subject<number> = new Subject<number>();

  public selectedProductId$: Observable<number> =
    this._selectedProductIdSubject.asObservable();

  readonly productDetails$: Observable<ProductModel> =
    this.selectedProductId$.pipe(
      switchMap((id) => this._productsService.getOne(id))
    );

  selectProduct(id: number) {
    this._selectedProductIdSubject.next(id);
  }

  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();
}
