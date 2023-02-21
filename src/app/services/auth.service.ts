import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthDataModel, RefreshTokenDataModel } from '../models/auth-data.model';
import { ResponseModel } from '../models/response.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('accessToken')
  );

  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('refreshToken')
  );

  constructor(private _httpClient: HttpClient, private _storage: Storage) {}

  login(email: string, password: string): Observable<AuthDataModel> {
    return this._httpClient
      .post<ResponseModel<AuthDataModel>>(`${environment.BASE_URL}/auth/login`, {
        data: {
          email,
          password,
        },
      })
      .pipe(
        map((r) => r.data),
        tap((data) => this._setTokens(data))
      );
  }

  getRefreshToken(): Observable<RefreshTokenDataModel> {
    return this._httpClient
      .post<ResponseModel<RefreshTokenDataModel>>(`${environment.BASE_URL}/auth/refresh`, {
        data: {
          refreshToken: this._getRefreshToken(),
        },
      })
      .pipe(
        map((r) => r.data),
        tap((data) => this._setTokens(data))
      );
  }

  isUserLogged(): Observable<boolean> {
    return this.accessTokenSubject.asObservable().pipe(map((token) => !!token));
  }

  logoutUser(): void {
    this._removeAccessToken();
    this._removeRefreshToken();
  }

  private _getRefreshToken(): string {
    return this._storage.getItem('refreshToken') || '';
  }

  private _removeAccessToken(): void {
    this.accessTokenSubject.next(null);
    this._storage.removeItem('accessToken');
  }

  private _removeRefreshToken(): void {
    this.refreshTokenSubject.next(null);
    this._storage.removeItem('refreshToken');
  }

  private _setTokens(data: AuthDataModel | RefreshTokenDataModel): void {
    this.accessTokenSubject.next(data.accessToken);
    this._storage.setItem('accessToken', data.accessToken);

    this.refreshTokenSubject.next(data.refreshToken);
    this._storage.setItem('refreshToken', data.refreshToken);
  }
}
