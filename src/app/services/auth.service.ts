import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginAPIModel, LoginData } from '../models/login-api.model';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this.storage.getItem('token')
  );

  constructor(private _httpClient: HttpClient, private storage: Storage) {}

  login(user: UserModel): Observable<LoginData> {
    return this._httpClient
      .post<LoginAPIModel>(`${environment.BASE_URL}auth/login`, {
        data: user,
      })
      .pipe(
        take(1),
        map((d) => d.data),
        tap((data) => this.setAuthToken(data.accessToken))
      );
  }

  removeAuthToken(): void {
    this.storage.removeItem('token');
    this.tokenSubject.next(null);
  }

  getAuthToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  private setAuthToken(token: string): void {
    const oldToken = this.storage.getItem('token');
    if (token === oldToken) return;
    this.storage.setItem('token', token);
    this.tokenSubject.next(token);
  }
}
