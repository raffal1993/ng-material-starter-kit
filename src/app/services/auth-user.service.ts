import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { UserAuthDataModel, UserLoginDataModel } from '../models/user-auth-data.model';
import { AuthStorageService } from './auth-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  constructor(private _httpClient: HttpClient, private _authStorageService: AuthStorageService) {}

  loginUser(email: string, password: string): Observable<UserAuthDataModel> {
    return this._httpClient
      .post<ResponseModel<UserLoginDataModel>>(`${environment.BASE_URL}/auth/login`, {
        data: {
          email,
          password,
        },
      })
      .pipe(
        map((r) => r.data),
        tap((data) => this._authStorageService.setUserData(data)),
        mergeMap(() => this._getUserData())
      );
  }

  private _getUserData(): Observable<UserAuthDataModel> {
    return this._httpClient
      .get<ResponseModel<UserAuthDataModel>>(`${environment.BASE_URL}/auth/me`)
      .pipe(
        map((r) => r.data),
        tap((data) =>
          this._authStorageService.setEmailVerified(`${data.user.context.email_verified}`)
        )
      );
  }
}
