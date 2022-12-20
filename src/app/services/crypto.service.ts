import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';

@Injectable()
export class CryptoService {
  constructor(private _httpClient: HttpClient) {}

  getCrypto(cryptoSymbol: string): Observable<CryptoModel[]> {
    return this._httpClient
      .get<CryptoModel[]>(`https://api2.binance.com/api/v3/ticker/24hr`)
      .pipe(
        map((cryptos) => {
          if (cryptoSymbol.length < 3) return [];
          return cryptos.filter(
            (crypto) => !!crypto.symbol.match(new RegExp(cryptoSymbol, 'g'))
          );
        })
      );
  }
}
