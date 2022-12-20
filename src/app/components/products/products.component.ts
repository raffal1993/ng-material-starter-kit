import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  constructor(private _productsService: ProductsService) {}

  readonly search: FormGroup = new FormGroup({ title: new FormControl() });

  private _startsWidthSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public startsWidth$: Observable<string> =
    this._startsWidthSubject.asObservable();

  /*  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.startsWidth$,
  ]).pipe(
    map(([products, startsWidth]) => {
      if (!startsWidth) return [];
      return products.filter((product) =>
        product.title.startsWith(startsWidth as string)
      );
    })
  );*/

  readonly startsWidthChanges$: Observable<string> =
    this.search.valueChanges.pipe(map((form) => form.title));

  readonly products$: Observable<ProductModel[]> =
    this.startsWidthChanges$.pipe(
      debounceTime(1000),
      switchMap((startsWith) =>
        this._productsService.getAllWithSearch(startsWith)
      )
    );

  onSearchSubmitted(search: FormGroup): void {
    /* this._startsWidthSubject.next(search.get('title')?.value);*/
  }

  onInputChange(eventValue: string): void {
    this._startsWidthSubject.next(eventValue);
  }
}
