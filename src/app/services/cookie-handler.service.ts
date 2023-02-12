import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class CookieHandlerService {
  constructor(private _cookieService: CookieService) {}
  getItem(key: string): string | null {
    return this._cookieService.get(key);
  }
  setItem(key: string, value: string): void {
    this._cookieService.set(key, value);
  }
  removeItem(key: string): void {
    this._cookieService.delete(key);
  }
}
