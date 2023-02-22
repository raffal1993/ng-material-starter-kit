import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthEmailNotVerified implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | UrlTree {
    return this._authService.isEmailVerified().pipe(
      map((isVerified) => {
        if (isVerified === 'true') return true;
        if (isVerified === 'false') return this._router.parseUrl(route.data['redirectToVerify']);
        return this._router.parseUrl(route.data['redirectToLogin']);
      })
    );
  }
}
