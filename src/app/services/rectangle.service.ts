import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RectangleService {
  private _rectangleColor: BehaviorSubject<string> = new BehaviorSubject<string>('#0000ff');

  constructor(private _httpClient: HttpClient) {}

  getRectangleColor(): Observable<string> {
    return this._rectangleColor.asObservable();
  }

  setRectangleColor(color: string) {
    this._rectangleColor.next(color);
  }

  saveRectangleColor(color: string): Observable<{ value: string; id: string }> {
    console.log(color);
    return this._httpClient.post<{ value: string; id: string }>(
      `https://643a957dbd3623f1b9b6accc.mockapi.io/colors`,
      {
        value: color,
      }
    );
  }
}
