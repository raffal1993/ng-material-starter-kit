import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ResponseModel } from '../models/response.model';
import { environment } from 'src/environments/environment';
import { LoginDataModel } from '../models/login-data.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('accessToken')
  );

  constructor(private _httpClient: HttpClient, private _storage: Storage) {}

  loginUser(email: string, password: string): Observable<LoginDataModel> {
    return this._httpClient
      .post<ResponseModel<LoginDataModel>>(`${environment.BASE_URL}/auth/login`, {
        data: {
          email,
          password,
        },
      })
      .pipe(
        map((r) => r.data),
        tap((data) => this._setUserData(data))
      );
  }
  loginAdmin(email: string, password: string): Observable<LoginDataModel> {
    return this._httpClient
      .post<ResponseModel<LoginDataModel>>(`${environment.BASE_URL}/auth/login-admin`, {
        data: {
          email,
          password,
        },
      })
      .pipe(
        map((r) => r.data)
        //     tap((data) => this._setUserData(data))
      );
  }
  //   https://us-central1-courses-auth.cloudfunctions.net/auth/login-admin
  logoutUser(): void {
    this._removeAccessToken();
  }

  private _removeAccessToken(): void {
    this.accessTokenSubject.next(null);
    this._storage.removeItem('accessToken');
  }

  private _setUserData(data: LoginDataModel): void {
    this.accessTokenSubject.next(data.accessToken);
    this._storage.setItem('accessToken', data.accessToken);
  }
}
