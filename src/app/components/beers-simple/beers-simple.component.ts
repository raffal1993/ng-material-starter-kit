import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, share, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-beers-simple',
  templateUrl: './beers-simple.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeersSimpleComponent {
  readonly beerParams$: Observable<Params> = this._activatedRoute.queryParams.pipe(
    shareReplay(1),
    map((params) => ({
      page: Number(params['page']) || 1,
    }))
  );

  readonly beers$: Observable<BeerModel[]> = this.beerParams$.pipe(
    shareReplay(1),
    switchMap((params) => this._beersService.getBeers(params['page'], 10))
  );

  readonly isButtonDisabled$: Observable<Boolean> = this.beers$.pipe(
    shareReplay(1),
    map((beers) => beers.length < 10)
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _beersService: BeersService,
    private _router: Router
  ) {}

  onClick(direction: 'prev' | 'next'): void {
    const dir = direction === 'prev' ? -1 : 1;
    this.beerParams$.pipe(take(1)).subscribe((params) => {
      this._router.navigate([], {
        queryParams: {
          page: Number(params['page']) + dir,
        },
      });
    });
  }
}
