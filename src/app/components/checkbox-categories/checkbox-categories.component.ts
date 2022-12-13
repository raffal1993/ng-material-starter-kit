import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-checkbox-categories',
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxCategoriesComponent {
  readonly checkboxCategories$: Observable<string[]> =
    this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {}
}
