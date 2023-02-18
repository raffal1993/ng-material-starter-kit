import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthLoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | UrlTree {
    console.log(`AuthLoginGuard`);
    return this._authService.isUserLogged().pipe(
      map((isUserLogged) => {
        return isUserLogged ? this._router.parseUrl(route.data['redirectToLogged']) : true;
      })
    );
  }
}
