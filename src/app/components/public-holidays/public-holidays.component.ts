import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PublicHolidaysModel } from '../../models/public-holidays.model';
import { PublicHolidaysService } from '../../services/public-holidays.service';

@Component({
  selector: 'app-public-holidays',
  templateUrl: './public-holidays.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHolidaysComponent {
  readonly publicHolidays$: Observable<PublicHolidaysModel[]> =
    this._publicHolidaysService.getAll();

  constructor(private _publicHolidaysService: PublicHolidaysService) {}
}
