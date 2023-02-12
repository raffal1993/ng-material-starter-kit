import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { UserAuthModel } from '../models/user-auth.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  userAuth(): Observable<UserAuthModel> {
    return this._httpClient
      .get<UserAuthModel>(`https://us-central1-courses-auth.cloudfunctions.net/auth/me`)
      .pipe(take(1));
  }
}
