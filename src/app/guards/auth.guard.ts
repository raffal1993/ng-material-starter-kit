import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | UrlTree {
    console.log(`AuthGuard`);
    return this._authService.isUserLogged().pipe(
      map((isUserLogged) => {
        return route.data['page'] === 'login'
          ? isUserLogged
            ? this._router.parseUrl(route.data['redirectToLogged'])
            : true
          : isUserLogged
          ? true
          : this._router.parseUrl(route.data['redirectToLogin']);
      })
    );
  }
}
