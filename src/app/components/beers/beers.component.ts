import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';
import { PageEvent } from '@angular/material/paginator';

const DEFAULT_OPTIONS = {
  page: 1,
  perPage: 5,
};

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeersComponent {
  readonly optionParams$: Observable<Params> = this._activatedRoute.queryParams.pipe(
    map((params) => ({
      page: params['page'] || DEFAULT_OPTIONS.page,
      perPage: params['perPage'] || DEFAULT_OPTIONS.perPage,
      pageSizeOptions: [5, 10, 15],
    })),
    shareReplay(1)
  );
  readonly beers$: Observable<BeerModel[]> = this.optionParams$.pipe(
    switchMap((params) => this._beersService.getBeers(params['page'], params['perPage']))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _beersService: BeersService
  ) {}

  onPageChange(event: PageEvent): void {
    const { pageIndex, pageSize } = event;
    this._router.navigate([], {
      queryParams: {
        page: pageIndex + 1,
        perPage: pageSize,
      },
    });
  }
}
