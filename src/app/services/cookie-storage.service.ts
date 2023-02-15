import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class CookieStorage implements Storage {
  length: number = 0;

  constructor(private _cookieService: CookieService) {}
  clear(): void {
    this._cookieService.deleteAll();
    throw new Error('Method not implemented.');
  }
  key(index: number): string | null {
    throw new Error('Method not implemented.');
  }

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
