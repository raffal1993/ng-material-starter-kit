import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

const DEFAULT_VALUES = {
  page: 1,
  perPage: 5,
};

@Component({
  selector: 'app-beers-custom',
  templateUrl: './beers-custom.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeersCustomComponent {
  readonly optionsForm: FormGroup = new FormGroup({
    perPage: new FormControl(DEFAULT_VALUES.perPage),
    page: new FormControl(DEFAULT_VALUES.page),
  });

  readonly beersParams$: Observable<Params> = this.optionsForm.valueChanges.pipe(
    startWith(DEFAULT_VALUES),
    map((formValues) => ({
      page: formValues['page'] || DEFAULT_VALUES.page,
      perPage: formValues['perPage'] || DEFAULT_VALUES.perPage,
    })),
    shareReplay(1)
  );

  readonly beers$: Observable<BeerModel[]> = this.beersParams$.pipe(
    switchMap((params) => this._beersService.getBeers(params['page'], params['perPage']))
  );

  readonly perPageOptions$: Observable<number[]> = of([5, 10, 15]);
  readonly pageOptions$: Observable<number[]> = of([1, 2, 3, 4, 5]);

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _beersService: BeersService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._router.navigate([], { queryParams: {} });

    this.optionsForm.valueChanges.subscribe((formvalues) => {
      this._router.navigate([], {
        queryParams: {
          page: formvalues['page'],
          perPage: formvalues['perPage'],
        },
      });
    });
  }
}
