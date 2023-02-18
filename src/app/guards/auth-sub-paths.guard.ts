import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthSubPathsGuard implements CanActivateChild {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    console.log(`AuthSubPathsGuard`);
    return this._authService.isUserLogged().pipe(
      map((isUserLogged) => {
        return isUserLogged ? true : this._router.parseUrl(childRoute.data['redirectToLogin']);
      })
    );
  }
}
