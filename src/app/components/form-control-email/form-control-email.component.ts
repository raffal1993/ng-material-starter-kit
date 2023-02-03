import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-control-email',
  templateUrl: './form-control-email.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlEmailComponent {
  readonly email: FormControl<string | null> = new FormControl<string | null>('', [
    Validators.email,
    //     or with pattern email regex
    //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);

  readonly emailValue$: Observable<string | null> = this.email.valueChanges;
}
