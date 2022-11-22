import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';

@Injectable()
export class CartService {
  constructor(private _httpClient: HttpClient) {}

  getCart(id: number): Observable<CartModel> {
    return this._httpClient.get<CartModel>(
      `https://fakestoreapi.com/carts/${id}`
    );
  }
}
