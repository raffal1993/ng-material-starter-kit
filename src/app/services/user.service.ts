import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { UserDataModel } from '../models/user-data.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  getUserData(): Observable<UserDataModel> {
    return this._httpClient
      .get<ResponseModel<UserDataModel>>(`${environment.BASE_URL}/auth/me`)
      .pipe(map((r) => r.data));
  }
}
