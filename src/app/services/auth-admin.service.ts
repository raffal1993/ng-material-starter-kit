import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminLoginDataModel } from '../models/admin-login-data.model';
import { ResponseModel } from '../models/response.model';
import { AuthStorageService } from './auth-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthAdminService {
  constructor(private _httpClient: HttpClient, private _authStorageService: AuthStorageService) {}

  loginAdmin(email: string, password: string): Observable<AdminLoginDataModel> {
    return this._httpClient
      .post<ResponseModel<AdminLoginDataModel>>(`${environment.BASE_URL}/auth/login-admin`, {
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
