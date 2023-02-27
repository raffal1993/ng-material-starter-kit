import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { UserLoginDataModel, UserProfileDataModel } from '../models/user-auth-data.model';

@Injectable({ providedIn: 'root' })
export class AuthStorageService {
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('accessToken')
  );

  private firstNameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('firstName')
  );

  private lastNameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    this._storage.getItem('lastName')
  );

  constructor(private _storage: Storage) {}

  isAccessToken(): Observable<boolean> {
    return this.accessTokenSubject.asObservable().pipe(map((token) => !!token));
  }

  isUserProfileComplete(): Observable<boolean> {
    return combineLatest([
      this.firstNameSubject.asObservable(),
      this.lastNameSubject.asObservable(),
    ]).pipe(map(([firstName, lastName]) => !!firstName && !!lastName));
  }

  logoutUser(): void {
    this._removeAccessToken();
    this._removeUserProfile();
  }

  setAccessToken(data: UserLoginDataModel): void {
    this.accessTokenSubject.next(data.accessToken);
    this._storage.setItem('accessToken', data.accessToken);
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

  private _removeUserProfile(): void {
    this.firstNameSubject.next(null);
    this._storage.removeItem('firstName');
    this.lastNameSubject.next(null);
    this._storage.removeItem('lastName');
  }
}
