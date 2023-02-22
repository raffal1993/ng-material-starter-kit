import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ResponseModel } from '../models/response.model';
import { environment } from 'src/environments/environment';
import { LoginDataModel } from '../models/login-data.model';
import { RegisterDataModel } from '../models/register-data.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('accessToken')
  );

  private isEmailVerifiedSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(this._storage.getItem('isEmailVerified'));

  constructor(private _httpClient: HttpClient, private _storage: Storage) {}

  login(email: string, password: string): Observable<LoginDataModel> {
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
  register(email: string, password: string): Observable<RegisterDataModel> {
    return this._httpClient
      .post<ResponseModel<RegisterDataModel>>(`${environment.BASE_URL}/auth/register2`, {
        data: {
          email,
          password,
        },
      })
      .pipe(map((r) => r.data));
  }

  isEmailVerified(): Observable<string | null> {
    return this.isEmailVerifiedSubject
      .asObservable()
      .pipe(map((isVerify) => (isVerify ? String(isVerify) : null)));
  }

  logoutUser(): void {
    this._removeAccessToken();
    this._removeIsEmailVerified();
  }

  private _removeAccessToken(): void {
    this.accessTokenSubject.next(null);
    this._storage.removeItem('accessToken');
  }

  private _removeIsEmailVerified(): void {
    this.isEmailVerifiedSubject.next(null);
    this._storage.removeItem('isEmailVerified');
  }

  private _setUserData(data: LoginDataModel): void {
    this.accessTokenSubject.next(data.accessToken);
    this._storage.setItem('accessToken', data.accessToken);
    this.isEmailVerifiedSubject.next(data.emailVerified);
    this._storage.setItem('isEmailVerified', data.emailVerified);
  }
}
