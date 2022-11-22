import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AgePredictionModel } from '../models/age-prediction.model';

@Injectable()
export class AgePredictionService {
  constructor(private _httpClient: HttpClient) {}

  getAge(name: string): Observable<AgePredictionModel> {
    return this._httpClient.get<AgePredictionModel>(
      `https://api.agify.io/?name=${name}`
    );
  }
}
