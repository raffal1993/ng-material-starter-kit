import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductFinalModel, ProductMetadataModel, ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/products`
    );
  }

  getProductMetadata(id: string): Observable<number> {
    return this._httpClient
      .get<ProductMetadataModel[]>(
        `https://636ce2d8ab4814f2b2712854.mockapi.io/products/${id}/product-metadata`
      )
      .pipe(map((prod) => prod.reduce((acc, curr) => acc + curr.stock, 0)));
  }

  // METHOD 2

  //   getFinalProduct(product: ProductModel): Observable<ProductFinalModel> {
  //     return this._httpClient
  //       .get<ProductMetadataModel[]>(
  //         `https://636ce2d8ab4814f2b2712854.mockapi.io/products/${product.id}/product-metadata`
  //       )
  //       .pipe(
  //         map((prod) => ({
  //           name: product.name,
  //           price: product.price,
  //           stock: prod.reduce((acc, curr) => acc + curr.stock, 0),
  //         }))
  //       );
  //   }
}
