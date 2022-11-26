import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';
import { PageEvent } from '@angular/material/paginator';

interface PageOptions {
  pageIndex: number;
  pageSize: number;
}

const INITIAL_PAGE_OPTIONS_VALUES = { pageIndex: 0, pageSize: 5 };

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeersComponent {
  constructor(private _beersService: BeersService) {}

  private _pageOptionsSubject: BehaviorSubject<PageOptions> =
    new BehaviorSubject<PageOptions>(INITIAL_PAGE_OPTIONS_VALUES);

  public pageOptions$: Observable<PageOptions> =
    this._pageOptionsSubject.asObservable();

  loadBeers(event: PageEvent) {
    const options: PageOptions = {
      pageSize: event.pageSize,
      pageIndex: event.pageIndex,
    };
    this._pageOptionsSubject.next(options);
  }

  readonly beers$: Observable<BeerModel[]> = this.pageOptions$.pipe(
    switchMap((options) =>
      this._beersService.getBeers(options.pageIndex + 1, options.pageSize)
    )
  );
}
