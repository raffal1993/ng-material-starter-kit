import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  readonly sort$: Observable<string | undefined> =
    this._activatedRoute.queryParams.pipe(map((params) => params['sort']));

  readonly sortedProducts$: Observable<ProductModel[]> = this.sort$.pipe(
    switchMap((sort) => this._productsService.getSortedProducts(sort))
  );

  //---
  // FE-method
  //---

  //   readonly sortedProducts$: Observable<ProductModel[]> = combineLatest([
  //     this._productsService.getAll(),
  //     this.sort$,
  //   ]).pipe(
  //     map(([products, sort]) => {
  //       if (!sort) return products;
  //       return products.sort((a, b) => {

  //         if (sort === 'asc' && a.id < b.id) return -1;
  //         if (sort === 'desc' && a.id > b.id) return -1;
  //         return 0;
  //       });
  //     })
  //   );

  public sortOptions$: Observable<string[]> = of(['asc', 'desc']);

  constructor(
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
