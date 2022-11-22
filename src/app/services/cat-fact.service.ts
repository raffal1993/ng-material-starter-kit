import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CatFactModel } from '../models/catFact.model';

@Injectable()
export class CatFactService {
  constructor(private _httpClient: HttpClient) {}

  getCatFact(): Observable<CatFactModel> {
    return this._httpClient
      .get<CatFactModel>(`https://catfact.ninja/fact`)
      .pipe(map((fact) => fact));
  }
}
