import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { CryptoCurrencyModel } from '../../models/crypto-currency.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoCurrencyComponent {
  readonly currencies$: Observable<CryptoCurrencyModel[]> =
    this._cryptoCurrencyService.getAllCurrencies();

  private _currencyDetail: Subject<CryptoCurrencyModel> =
    new Subject<CryptoCurrencyModel>();

  public currencyDetail$: Observable<CryptoCurrencyModel> =
    this._currencyDetail.asObservable();

  setCurrencyDetail(currency: CryptoCurrencyModel) {
    this._currencyDetail.next(currency);
  }

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {}
}
