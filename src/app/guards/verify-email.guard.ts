import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStorageService } from '../services/auth-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthProfileGuard implements CanActivate {
  constructor(private _authStorageService: AuthStorageService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this._authStorageService
      .isEmailVerified()
      .pipe(
        map((isEmailVerified) =>
          isEmailVerified ? true : this._router.parseUrl(route.data['redirectToVerify'])
        )
      );
  }
}
