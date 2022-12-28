import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of, combineLatest, startWith, map } from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeersComponent {
  readonly pageOptionsDefaultValues = {
    page: 1,
    limit: 5,
  };

  readonly pageOptions: FormGroup = new FormGroup({
    page: new FormControl(this.pageOptionsDefaultValues.page),
    limit: new FormControl(this.pageOptionsDefaultValues.limit),
  });

  readonly beers$: Observable<BeerModel[]> = combineLatest([
    this._beersService.getAll(),
    this.pageOptions.valueChanges.pipe(
      startWith(this.pageOptionsDefaultValues)
    ),
  ]).pipe(
    map(([beers, { page, limit }]) =>
      beers.slice((page - 1) * limit, page * limit)
    )
  );

  readonly pageLimits$: Observable<number[]> = of([5, 10, 15, 20, 25]);

  constructor(private _beersService: BeersService) {}
}
