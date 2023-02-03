import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-form-control-name',
  templateUrl: './form-control-name.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlNameComponent {
  readonly name: FormControl<string | null> = new FormControl<string | null>('', [
    Validators.minLength(3),
    Validators.required,
  ]);

  readonly nameValue$: Observable<string | null> = this.name.valueChanges;
}
