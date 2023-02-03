import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-control-age',
  templateUrl: './form-control-age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlAgeComponent {
  readonly age: FormControl<number | null> = new FormControl<number | null>(null, [
    Validators.min(18),
  ]);

  readonly ageValue$: Observable<number | null> = this.age.valueChanges;
}
