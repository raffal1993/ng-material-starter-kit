import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductWithCategoryModel } from '../models/product-with-category.model';
import { ProductWithCategoryQueryModel } from '../query-models/product-with-category.query-model';

@Injectable({ providedIn: 'root' })
export class ProductsWithCategoryService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ProductWithCategoryModel[]> {
    return this._httpClient.get<ProductWithCategoryModel[]>(`https://fakestoreapi.com/products`);
  }

  getProductCard(product: ProductWithCategoryModel): Observable<ProductWithCategoryQueryModel> {
    return this._httpClient
      .get<ProductWithCategoryModel[]>(
        `https://fakestoreapi.com/products/category/${product.category}`
      )
      .pipe(
        map((otherProducts) => ({
          mainProduct: product,
          otherProducts,
        }))
      );
  }
}
