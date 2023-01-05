import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car, CarBrand, CarComfortFeature } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['cars.component.css'],
})
export class CarsComponent {
  readonly carBrands$: Observable<CarBrand[]> =
    this._carsService.getCarBrands();

  readonly carComfortFeatures$: Observable<CarComfortFeature[]> =
    this._carsService.getCarComfortFeature();

  readonly brandsParam$: Observable<string | null> =
    this._activatedRoute.queryParams.pipe(map((params) => params['brands']));

  readonly comfortFeaturesParam$: Observable<string | null> =
    this._activatedRoute.queryParams.pipe(
      map((params) => params['comfort-features'])
    );

  readonly cars$: Observable<Car[]> = combineLatest([
    this._carsService.getCars(),
    this.brandsParam$,
    this.comfortFeaturesParam$,
  ]).pipe(
    map(([cars, brandsParams, cFeaturesParams]) => {
      if (!brandsParams && !cFeaturesParams) return cars;

      const filteredCars = cars.filter(({ brandId, comfortFeatureIds }) => {
        const hasBrand =
          brandsParams &&
          brandsParams.split(',').some((brand) => brand === brandId);

        const hasComfortFeature =
          comfortFeatureIds &&
          comfortFeatureIds.some(
            (cFeatureId) =>
              cFeatureId &&
              cFeaturesParams &&
              cFeaturesParams
                .split(',')
                .some((cFeature) => cFeature === cFeatureId)
          );
        if (brandsParams && cFeaturesParams)
          return hasBrand && hasComfortFeature;
        return hasBrand || hasComfortFeature;
      });

      return filteredCars;
    })
  );

  constructor(
    private _carsService: CarsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  onSelectBrand(event: MatSelectionListChange): void {
    const brands = event.source._value as CarBrand[] | null;
    this._router.navigate([], {
      queryParams: {
        brands:
          brands && brands.length > 0
            ? brands.map((brand) => brand.id).join(',')
            : null,
      },
      queryParamsHandling: 'merge',
    });
  }

  onSelectComfortFeature(event: MatSelectionListChange): void {
    const comfortFeatures = event.source._value as CarComfortFeature[] | null;
    this._router.navigate([], {
      queryParams: {
        'comfort-features':
          comfortFeatures && comfortFeatures.length > 0
            ? comfortFeatures
                .map((comfortFeature) => comfortFeature.id)
                .join(',')
            : null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
