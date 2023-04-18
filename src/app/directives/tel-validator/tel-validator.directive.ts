import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector:
    '[input[type=tel][formControlName],input[type=tel][formControl],input[type=tel][ngModel]]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TelValidatorDirective, multi: true },
  ],
})
export class TelValidatorDirective implements Validator {
  @Input() pattern: string | undefined = undefined;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!this.pattern || !control.value) return null;
    const val = control.value as string;
    if (!new RegExp(this.pattern).test(val)) return { patter: true };
    return null;
  }
}
