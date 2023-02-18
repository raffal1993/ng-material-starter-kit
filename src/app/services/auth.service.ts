import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthDataModel } from '../models/auth-data.model';
import { ResponseModel } from '../models/response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('accessToken')
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
        tap((data) => this._setAccessToken(data))
      );
  }

  getAccessToken(): Observable<string | null> {
    return this.accessTokenSubject.asObservable();
  }

  isUserLogged(): Observable<boolean> {
    return this.accessTokenSubject.asObservable().pipe(map((t) => !!t));
  }

  logoutUser(): void {
    this._removeAccessToken();
  }

  private _removeAccessToken(): void {
    this.accessTokenSubject.next(null);
    this._storage.removeItem('accessToken');
  }

  private _setAccessToken(data: AuthDataModel): void {
    this.accessTokenSubject.next(data.accessToken);
    this._storage.setItem('accessToken', data.accessToken);
  }
}
