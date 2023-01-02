import { Car, CarBrand, CarComfortFeature } from './../models/car.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CarsService {
  constructor(private _httpClient: HttpClient) {}

  getCarBrands(): Observable<CarBrand[]> {
    return this._httpClient.get<CarBrand[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands`
    );
  }
  getCarComfortFeature(): Observable<CarComfortFeature[]> {
    return this._httpClient.get<CarComfortFeature[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features`
    );
  }
  getCars(): Observable<Car[]> {
    return this._httpClient.get<Car[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/cars`
    );
  }
}
