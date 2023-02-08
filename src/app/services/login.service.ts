import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginAPIModel, LoginAPISuccessModel } from '../models/loginAPI.model';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private _httpClient: HttpClient) {}

  login(user: UserModel): Observable<LoginAPIModel | LoginAPISuccessModel> {
    // <-- should I type like that? in "next:()" i get data response with LoginAPISuccessModel not LoginAPIModel
    return this._httpClient.post<LoginAPIModel>(
      `https://us-central1-courses-auth.cloudfunctions.net/auth/login`,
      {
        data: user,
      }
    );
  }
}
