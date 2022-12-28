import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeerModel } from '../models/beer.model';

@Injectable()
export class BeersService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>(
      `https://api.punkapi.com/v2/beers`
    );
  }
}
