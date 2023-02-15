import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AuthDataModel } from '../models/auth-data.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userIDSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('userID')
  );

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('token')
  );

  constructor(private _httpClient: HttpClient, private _storage: Storage) {}

  login(user: UserModel): Observable<any> {
    return this._httpClient
      .post<AuthDataModel>(`${environment.BASE_URL}/auth/login`, {
        data: {
          email: user.email,
          password: user.password,
        },
      })
      .pipe(
        take(1),
        map((d) => d.data),
        tap((data) => {
          this.setAuthDetails(data);
        })
      );
  }

  getAuthToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  getUserID(): Observable<string | null> {
    return this.userIDSubject.asObservable();
  }

  private setAuthDetails(data: AuthDataModel['data']): void {
    this._storage.setItem('token', data.accessToken);
    this.tokenSubject.next(data.accessToken);
    this._storage.setItem('userID', data.id);
    this.userIDSubject.next(data.id);
  }

  private _removeUserID(): void {
    this._storage.removeItem('userID');
    this.userIDSubject.next(null);
  }

  private _removeAuthToken(): void {
    this._storage.removeItem('token');
    this.tokenSubject.next(null);
  }

  logoutUser(): void {
    this._removeAuthToken();
    this._removeUserID();
  }
}
