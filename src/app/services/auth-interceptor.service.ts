import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private _authService: AuthService) {}
  readonly token$ = this._authService.getAuthToken();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.token$.pipe(
      switchMap((token) => {
        if (token) {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(req);
        }
        return next.handle(req);
      })
    );
  }
}
