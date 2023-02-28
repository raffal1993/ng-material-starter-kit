import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private _storage: Storage) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const whiteListUrls = [
      `${environment.BASE_URL}/auth/me`,
      `${environment.BASE_URL}/auth/complete-profile`,
    ];
    return whiteListUrls.includes(req.url)
      ? next.handle(this._setAccessToken(req))
      : next.handle(req);
  }

  private _setAccessToken(request: HttpRequest<any>): HttpRequest<any> {
    const token = this._storage.getItem('accessToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return request;
  }
}
