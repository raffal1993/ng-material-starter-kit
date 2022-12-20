import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAllWithSearch(search: string): Observable<ProductModel[]> {
    return this._httpClient
      .get<ProductModel[]>(`https://fakestoreapi.com/products`)
      .pipe(
        map((products) => {
          if (!search) return [];
          return products.filter((product) => product.title.startsWith(search));
        })
      );
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      `https://fakestoreapi.com/products`
    );
  }
}
