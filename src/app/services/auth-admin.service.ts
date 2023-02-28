import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfileDataModel } from '../models/user-auth-data.model';
import { AuthStorageService } from './auth-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthAdminService {
  constructor(private _httpClient: HttpClient, private _authStorageService: AuthStorageService) {}

  updateProfile({ firstName, lastName }: UserProfileDataModel): Observable<null> {
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
