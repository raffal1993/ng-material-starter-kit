import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { UserLoginDataModel } from '../models/user-login-data.model';
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
        tap((data) => this._authStorageService.setUserData(data, email))
      );
  }
}
