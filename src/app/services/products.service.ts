import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getSortedProducts(sort: string | undefined): Observable<ProductModel[]> {
    return this._httpClient
      .get<ProductModel[]>('https://fakestoreapi.com/products')
      .pipe(
        map((products) => {
          if (!sort) return products;
          return products.sort((a, b) => {
            if (sort === 'asc' && a.id < b.id) return -1;
            if (sort === 'desc' && a.id > b.id) return -1;
            return 0;
          });
        })
      );
  }

  getProductsByCategory(category: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }

  //---
  // FE-method
  //---
  //     getAll(): Observable<ProductModel[]> {
  //       return this._httpClient.get<ProductModel[]>(
  //         'https://fakestoreapi.com/products'
  //       );
  //     }
}
