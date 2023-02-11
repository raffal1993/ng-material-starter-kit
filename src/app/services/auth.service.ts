import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginAPIModel } from '../models/login-api.model';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _httpClient: HttpClient) {}
  login(user: UserModel): Observable<LoginAPIModel> {
    return this._httpClient.post<LoginAPIModel>(
      `https://us-central1-courses-auth.cloudfunctions.net/auth/login`,
      {
        data: user,
      }
    );
  }
  getAuthToken(): string {
    const token = localStorage.getItem('token');
    return token || '';
  }

  setAuthToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeAuthToken(): void {
    localStorage.removeItem('token');
  }
}
