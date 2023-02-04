import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private _httpClient: HttpClient) {}

  login(email: string, password: string): Observable<LoginModel> {
    return this._httpClient.post<LoginModel>(
      'https://us-central1-courses-auth.cloudfunctions.net/auth/login',
      {
        data: {
          email: email,
          password: password,
        },
      }
    );
  }
}
