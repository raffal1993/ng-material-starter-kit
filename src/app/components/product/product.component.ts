import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  readonly product$: Observable<ProductModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._productService.getOne(data['id']))
    );
}
