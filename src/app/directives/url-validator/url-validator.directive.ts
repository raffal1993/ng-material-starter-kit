import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector:
    '[input[type=url][formControlName],input[type=url][formControl],input[type=url][ngModel]]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true },
  ],
})
export class UrlValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!control.value) return null;
    const val = control.value.trim() as string;

    const error = {};
    if (!val.startsWith(`http://`) && !val.startsWith(`https://`))
      Object.assign(error, { mustStartWithHttpOrHttps: true });

    if (!val.match(/\.[a-z]{2,}$/))
      Object.assign(error, { mustEndWithDotDomain: true });

    control.setErrors(error);

    return Object.keys(error).length === 0 ? null : error;
  }
}
