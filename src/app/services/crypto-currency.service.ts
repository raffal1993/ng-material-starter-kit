import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoCurrencyModel } from '../models/crypto-currency.model';

@Injectable()
export class CryptoCurrencyService {
  constructor(private _httpClient: HttpClient) {}

  getAllCurrencies(): Observable<CryptoCurrencyModel[]> {
    return this._httpClient.get<CryptoCurrencyModel[]>(
      `https://api2.binance.com/api/v3/ticker/24hr`
    );
  }
}
