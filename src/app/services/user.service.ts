import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  getUser(id: number): Observable<UserModel> {
    return this._httpClient.get<UserModel>(
      `https://fakestoreapi.com/users/${id}`
    );
  }
}
