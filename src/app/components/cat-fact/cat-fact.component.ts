import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactModel } from '../../models/catFact.model';
import { CatFactService } from '../../services/cat-fact.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactComponent {
  readonly catFact$: Observable<CatFactModel> = this._catFactService.getCatFact();

  constructor(private _catFactService: CatFactService) {
  }
}
