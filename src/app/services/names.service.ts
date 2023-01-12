import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NamesService {
  getAll(): Observable<{ name: string; id: number }[]> {
    return of(this._initialNames).pipe(
      delay(2000),
      map((data) => {
        if (Math.random() > 0.5) throw Error('erorr');
        else return data;
      })
    );
  }

  private _initialNames = [
    { name: 'John', id: 1 },
    { name: 'Raymond', id: 2 },
    { name: 'Abbey', id: 3 },
    { name: 'Mikey', id: 4 },
    { name: 'Kaylee', id: 5 },
  ];
}
