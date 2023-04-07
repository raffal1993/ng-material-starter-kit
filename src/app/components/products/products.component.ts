import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements AfterViewInit {
  readonly products$: Observable<ProductModel[]> = this._productsService.getAll();

  readonly langOptions$: Observable<string[]> = of(['en', 'pl']);

  readonly tableRowHeaders: string[] = [
    'Name',
    'Image',
    'Price',
    'Published Since',
    'Product Code',
  ];

  private _selectedLangSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  readonly selectedLang$: Observable<string> = this._selectedLangSubject.asObservable();

  private _searchedTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>(' ');
  readonly searchedTerm$: Observable<string> = this._searchedTermSubject.asObservable();

  readonly search: FormGroup = new FormGroup({ search: new FormControl() });

  constructor(private _productsService: ProductsService) {}

  onLangSelect(event: MatSelectionListChange) {
    const value = event.source._value && event.source._value[0];
    this._selectedLangSubject.next(value || 'en');
  }

  ngAfterViewInit(): void {
    this.search.valueChanges.subscribe((val) => this._searchedTermSubject.next(val.search));
  }
}
