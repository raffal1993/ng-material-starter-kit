import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStorageService } from '../services/auth-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthLoginGuard implements CanActivate {
  constructor(private _authStorageService: AuthStorageService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this._authStorageService
      .isAccessToken()
      .pipe(
        map((isAccessToken) =>
          isAccessToken ? true : this._router.parseUrl(route.data['redirectToLogin'])
        )
      );
  }
}
