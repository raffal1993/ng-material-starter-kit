import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, combineLatest, map, of, shareReplay, take, forkJoin, zip } from 'rxjs';
import { CityModel } from '../../models/city.model';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  readonly params$: Observable<Params> = this._activatedRoute.queryParams.pipe(
    map((params) => ({ pageNumber: params['pageNumber'] || 1, pageSize: params['pageSize'] || 5 })),
    shareReplay(1)
  );

  readonly cities$: Observable<CityModel[]> = this._citiesService.getAll().pipe(shareReplay(1));

  readonly filteredCities$: Observable<CityModel[]> = combineLatest([
    this.cities$,
    this.params$,
  ]).pipe(
    map(([cities, params]) => {
      return cities.slice(
        (params['pageNumber'] - 1) * params['pageSize'],
        params['pageSize'] * params['pageNumber']
      );
    }),
    shareReplay(1)
  );

  readonly pageSize$: Observable<number[]> = of([5, 10, 15]);

  readonly pages$: Observable<number[]> = combineLatest([this.params$, this.cities$]).pipe(
    map(([params, cities]) => {
      const quantityOfPages = this.getQuantityOfPages(cities, params);

      return [...Array(quantityOfPages + 1).keys()].slice(1);
    })
  );

  constructor(
    private _citiesService: CitiesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  onPageChange(event: MatSelectionListChange) {
    const number = event.source._value ? event.source._value[0] : null;

    this._router.navigate([], {
      queryParams: {
        pageNumber: number,
      },
      queryParamsHandling: 'merge',
    });
  }

  onPageSizeChange(event: MatSelectionListChange) {
    const size = event.source._value ? event.source._value[0] : null;

    zip(this.pages$, this.cities$)
      .pipe(take(1))
      .subscribe(([pages, cities]) => {
        const newQuantityOfPages = this.getQuantityOfPages(cities, { pageSize: size });
        const newQueryParams =
          pages.length > newQuantityOfPages
            ? { pageNumber: newQuantityOfPages, pageSize: size }
            : { pageSize: size };

        this._router.navigate([], {
          queryParams: { ...newQueryParams },
          queryParamsHandling: 'merge',
        });
      });
  }

  private getQuantityOfPages(cities: CityModel[], params: Params): number {
    return cities.length % params['pageSize'] === 0
      ? cities.length / params['pageSize']
      : Math.floor(cities.length / params['pageSize'] + 1);
  }

  ngOnInit(): void {
    this.params$.pipe(take(1)).subscribe((params) =>
      this._router.navigate([], {
        queryParams: {
          pageNumber: params['pageNumber'],
          pageSize: params['pageSize'],
        },
      })
    );
  }
}
