import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, map, shareReplay, take, tap } from 'rxjs';

import { Car, CarBrand, CarComfortFeature } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars-dif',
  templateUrl: './cars-dif.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsDifComponent {
  readonly carBrands$: Observable<CarBrand[]> = this._carsService.getCarBrands();

  readonly comfortFeatures$: Observable<CarComfortFeature[]> =
    this._carsService.getCarComfortFeature();

  readonly filterValues$: Observable<{
    brands: Set<string>;
    comfortFeatures: Set<string>;
  }> = this._activatedRoute.queryParams.pipe(
    map((params) => ({
      brands: new Set<string>(params['brands'] === undefined ? [] : params['brands'].split(',')),
      comfortFeatures: new Set<string>(
        params['comfort-features'] === undefined ? [] : params['comfort-features'].split(',')
      ),
    })),
    shareReplay(1)
  );

  readonly cars$: Observable<Car[]> = combineLatest([
    this.filterValues$,
    this._carsService.getCars(),
  ]).pipe(
    map(([params, cars]) =>
      cars
        .filter((c) => params.brands.size === 0 || (c.brandId && params.brands.has(c.brandId)))
        .filter(
          (c) =>
            params.comfortFeatures.size === 0 ||
            c.comfortFeatureIds?.find((cfId) => cfId && params.comfortFeatures.has(cfId))
        )
    )
  );

  constructor(
    private _carsService: CarsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  onBrandChanged(brand: CarBrand, isSelected: boolean) {
    this.filterValues$
      .pipe(
        take(1),
        tap((data) => {
          const brandParamSet = data.brands;
          isSelected === true ? brandParamSet.add(brand.id) : brandParamSet.delete(brand.id);

          this._router.navigate([], {
            queryParams: this._mergeQueryParams(data.comfortFeatures, brandParamSet),
          });
        })
      )
      .subscribe();
  }

  onComfortFeatureChanged(comfortFeature: CarComfortFeature, isSelected: boolean) {
    this.filterValues$
      .pipe(
        take(1),
        tap((data) => {
          const cfParamSet = data.comfortFeatures;
          isSelected === true
            ? cfParamSet.add(comfortFeature.id)
            : cfParamSet.delete(comfortFeature.id);

          this._router.navigate([], {
            queryParams: this._mergeQueryParams(cfParamSet, data.brands),
          });
        })
      )
      .subscribe();
  }

  private _mergeQueryParams(
    cfParamSet: Set<string>,
    brandParamSet: Set<string>
  ): Record<string, string> {
    const queryParams = {} as Record<string, string>;
    if (cfParamSet.size > 0) {
      queryParams['comfort-features'] = [...cfParamSet].sort().join(',');
    }
    if (brandParamSet.size > 0) {
      queryParams['brands'] = [...brandParamSet].sort().join(',');
    }
    return queryParams;
  }
}
