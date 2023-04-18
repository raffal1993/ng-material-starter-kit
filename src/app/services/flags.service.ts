import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlagModel } from '../models/flag.model';

@Injectable({ providedIn: 'root' })
export class FlagsService {
  constructor(private _httpClient: HttpClient) {}
  getAll(): Observable<FlagModel[]> {
    return this._httpClient.get<FlagModel[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags`
    );
  }
}
