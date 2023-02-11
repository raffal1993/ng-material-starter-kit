import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

//////////////////////////////
/// WITH HEADER AUTHORIZATION
//////////////////////////////

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private _authService: AuthService, private _cookieService: CookieService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._authService.getAuthToken();
    console.log(`----INTERCEPTOR-----`);
    if (token) {
      HttpHeaders;
      //       this._cookieService.set('Bearer', `${token}`);
      req = req.clone({
        setHeaders: {
          'Set-Cookie': `Authorization=Bearer ${token};`,
          //   Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(req);
  }
}

//////////////////////////////
/// WITH COOKIES
//////////////////////////////

// @Injectable({ providedIn: 'root' })
// export class AuthInterceptorService implements HttpInterceptor {
//   constructor(private _authService: AuthService) {}
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = this._authService.getAuthToken();

//     if (token) {
//       req = req.clone({
//         setHeaders: {
//           Cookie: `Authorization=Bearer ${token};`,
//           'Access-Control-Allow-Credentials': 'true',
//         },
//         withCredentials: true,
//       });
//     }
//     return next.handle(req);
//   }
