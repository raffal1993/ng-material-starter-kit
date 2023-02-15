import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, take } from 'rxjs';
import { UserDetailsModel } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserDetailsService {
  constructor(private _httpClient: HttpClient) {}

  getUserDetails(): Observable<UserDetailsModel> {
    return this._httpClient
      .get<UserDetailsModel>(`${environment.BASE_URL}/auth/me`)
      .pipe(take(1), shareReplay(1));
  }
}
