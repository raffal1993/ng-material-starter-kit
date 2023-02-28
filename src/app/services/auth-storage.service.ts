import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { UserLoginDataModel, UserProfileDataModel } from '../models/user-auth-data.model';

@Injectable({ providedIn: 'root' })
export class AuthStorageService {
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('accessToken')
  );

  private isEmailVerifiedSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(this._storage.getItem('isEmailVerified'));

  private firstNameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('firstName')
  );

  private lastNameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('lastName')
  );

  private userRoleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    null
  );

  constructor(private _storage: Storage, private _window: Window) {}

  isUserProfileComplete(): Observable<boolean> {
    return combineLatest([
      this.firstNameSubject.asObservable(),
      this.lastNameSubject.asObservable(),
    ]).pipe(map(([firstName, lastName]) => !!firstName && !!lastName));
  }

  logoutUser(): void {
    this._removeAccessToken();
    this._removeUsersRole();
    this._removeUserProfile();
    this._removeEmailVerified();
  }

  isEmailVerified(): Observable<boolean> {
    return this.isEmailVerifiedSubject
      .asObservable()
      .pipe(map((isVerified) => isVerified === 'true'));
  }

  isAdmin(): Observable<boolean> {
    return this.userRoleSubject.asObservable().pipe(map((role) => role === 'admin'));
  }

  setUserData(data: UserLoginDataModel): void {
    this.accessTokenSubject.next(data.accessToken);
    this._storage.setItem('accessToken', data.accessToken);

    const roleByAccessToken =
      JSON.parse(this._window.atob(data.accessToken.split('.')[1]))['role'] || 'user';

    this.userRoleSubject.next(roleByAccessToken);
  }

  setEmailVerified(isEmailVerified: string): void {
    this.isEmailVerifiedSubject.next(isEmailVerified);
    this._storage.setItem('isEmailVerified', isEmailVerified);
  }

  setUserProfile({ firstName, lastName }: UserProfileDataModel): void {
    this.firstNameSubject.next(firstName);
    this._storage.setItem('firstName', firstName);
    this.lastNameSubject.next(lastName);
    this._storage.setItem('lastName', lastName);
  }

  private _removeAccessToken(): void {
    this.accessTokenSubject.next(null);
    this._storage.removeItem('accessToken');
  }

  private _removeUsersRole(): void {
    this.userRoleSubject.next(null);
  }

  private _removeEmailVerified(): void {
    this.isEmailVerifiedSubject.next(null);
  }

  private _removeUserProfile(): void {
    this.firstNameSubject.next(null);
    this._storage.removeItem('firstName');
    this.lastNameSubject.next(null);
    this._storage.removeItem('lastName');
  }
}
