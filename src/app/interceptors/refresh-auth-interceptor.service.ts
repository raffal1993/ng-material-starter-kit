import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RefreshAuthInterceptorService implements HttpInterceptor {
  constructor(private _authService: AuthService, private _storage: Storage) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const refreshToken = this._storage.getItem('refreshToken');

    return next.handle(req).pipe(
      catchError((e) => {
        if (e.status === 403 && e.error.message === 'Token is invalid') {
          return refreshToken
            ? this._authService
                .getRefreshToken(refreshToken)
                .pipe(switchMap((_) => next.handle(req)))
            : of(e);
        }
        return of(e);
      })
    );
  }
}
