import { ProductModel } from './../../models/product.model';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';

const DEFAULT_LIMIT_PARAM = 5;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  ngOnInit(): void {
    this.limitParams$.subscribe((params) => {
      params === undefined &&
        this._router.navigate([], {
          queryParams: {
            limit: DEFAULT_LIMIT_PARAM,
          },
        });
    });
  }

  public buttonOptions$: Observable<number[]> = of([5, 10, 15]);

  public buttonForm: FormControl = new FormControl(DEFAULT_LIMIT_PARAM);

  readonly limitParams$: Observable<number> =
    this._activatedRoute.queryParams.pipe(map((params) => params['limit']));

  readonly products$: Observable<ProductModel[]> = this.limitParams$.pipe(
    switchMap((params) => this._productsService.getLimitedProducts(params))
  );

  onClickMenuItem(item: any): void {
    this.buttonForm.setValue(item);
  }

  constructor(
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
}
