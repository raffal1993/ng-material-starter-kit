import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AdminLoginDataModel } from '../models/admin-login-data.model';
import { UserLoginDataModel } from '../models/user-login-data.model';

@Injectable({ providedIn: 'root' })
export class AuthStorageService {
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('accessToken')
  );

  private userRoleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('role')
  );

  private emailSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('email')
  );

  constructor(private _storage: Storage) {}

  isAdmin(): Observable<boolean> {
    return this.userRoleSubject.asObservable().pipe(map((role) => role === 'admin'));
  }

  getEmail(): Observable<string | null> {
    return this.emailSubject.asObservable();
  }

  logoutUser(): void {
    this._removeAccessToken();
    this._removeUsersRole();
    this._removeEmail();
  }

  setUserData(
    data: AdminLoginDataModel | UserLoginDataModel,
    role: 'user' | 'admin',
    email: string
  ): void {
    this.accessTokenSubject.next(data.accessToken);
    this._storage.setItem('accessToken', data.accessToken);

    //     const roleByAccessToken =
    //       JSON.parse(this._window.atob(data.accessToken.split('.')[1]))['role']

    this.userRoleSubject.next(role);
    this._storage.setItem('role', role);

    this.emailSubject.next(email);
    this._storage.setItem('email', email);
  }

  private _removeAccessToken(): void {
    this.accessTokenSubject.next(null);
    this._storage.removeItem('accessToken');
  }

  private _removeUsersRole(): void {
    this.userRoleSubject.next(null);
    this._storage.removeItem('role');
  }

  private _removeEmail(): void {
    this.emailSubject.next(null);
    this._storage.removeItem('email');
  }
}
