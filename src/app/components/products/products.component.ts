import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map, Observable, shareReplay, take } from 'rxjs';
import { ProductQueryModel } from 'src/app/query-models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  readonly products$: Observable<ProductQueryModel[]> = this._productsService.getAll().pipe(
    map((products) =>
      products.map((prod) => ({
        name: prod.name,
        price: prod.price,
        stock: this._productsService.getProductMetadata(prod.id),
      }))
    ),
    shareReplay(1)
  );

  // METHOD 2

  //   readonly products$: Observable<ProductQueryModel[]> = this._productsService
  //   .getAll()
  //   .pipe(
  //     switchMap((products) =>
  //       forkJoin(products.map((prod) => this._productsService.getFinalProduct(prod)))
  //     )
  //   );

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$.pipe(take(1)).subscribe((data) => console.log(data));
  }
}
