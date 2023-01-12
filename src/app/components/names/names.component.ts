import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, startWith, switchMap } from 'rxjs';
import { NamesQueryModel } from 'src/app/queryModels/names';

import { NamesService } from '../../services/names.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NamesComponent {
  readonly _dataSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  public data$: Observable<NamesQueryModel> = this._dataSubject.asObservable().pipe(
    switchMap(() =>
      this._namesService.getAll().pipe(
        map((names) => ({
          isLoading: false,
          isError: false,
          names: names,
        })),
        startWith({ isLoading: true, isError: false }),
        catchError(() => of({ isLoading: false, isError: true }))
      )
    )
  );

  constructor(private _namesService: NamesService) {}

  onRefresh(): void {
    this._dataSubject.next(void 0);
  }
}
