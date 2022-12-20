import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, debounceTime, switchMap } from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversitiesComponent {
  private _countrySubject: Subject<string> = new Subject<string>();
  public country$: Observable<string> = this._countrySubject.asObservable();

  readonly universities$: Observable<UniversityModel[]> = this.country$.pipe(
    debounceTime(1000),
    switchMap((country) =>
      this._universitiesService.getUniversitiesByCountry(country)
    )
  );
  readonly countryForm: FormGroup = new FormGroup({
    country: new FormControl(),
  });

  setCountry(event: string): void {
    this._countrySubject.next(event);
  }

  constructor(private _universitiesService: UniversitiesService) {}
}
