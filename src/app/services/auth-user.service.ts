import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { UserLoginDataModel, UserProfileDataModel } from '../models/user-auth-data.model';
import { AuthStorageService } from './auth-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  constructor(private _httpClient: HttpClient, private _authStorageService: AuthStorageService) {}

  loginUser(email: string, password: string): Observable<UserLoginDataModel> {
    return this._httpClient
      .post<ResponseModel<UserLoginDataModel>>(`${environment.BASE_URL}/auth/login`, {
        data: {
          email,
          password,
        },
      })
      .pipe(
        map((r) => r.data),
        tap((data) => this._authStorageService.setAccessToken(data))
      );
  }

  updateUserProfile({ firstName, lastName }: UserProfileDataModel): Observable<null> {
    return this._httpClient
      .post<null>(`${environment.BASE_URL}/auth/complete-profile`, {
        data: {
          firstName,
          lastName,
        },
      })
      .pipe(tap(() => this._authStorageService.setUserProfile({ firstName, lastName })));
  }
}
