import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const customDateOfBirthValidation: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const monthInput = control.get('month')?.value;
  const dayInput = control.get('day')?.value;
  const yearInput = control.get('year')?.value;

  const hasErrors =
    control.get('month')?.errors || control.get('day')?.errors || control.get('year')?.errors;

  if (!monthInput || !dayInput || !yearInput || hasErrors) return null;

  const maxDays = new Date(yearInput, monthInput, 0).getDate();

  return dayInput > maxDays ? { customDateOfBirthValidation: maxDays } : null;
};

const customCrossFieldValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const repeatPassword = control.get('repeatPassword')?.value;

  const error = password === repeatPassword ? null : { customCrossFieldValidator: true };

  control.get('repeatPassword')?.setErrors(error);
  return error;
};

const customPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;

  if (!value) return null;

  const hasMinimumChars = /[0-9a-zA-Z!@#$%^\*\(\)]{6,}/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^\*\(\)]/.test(value);
  const hasCapitalChar = /[A-Z]/.test(value);
  const hasSmallChar = /[a-z]/.test(value);

  const isPasswordValid =
    hasMinimumChars && hasNumber && hasSpecialChar && hasCapitalChar && hasSmallChar;

  return isPasswordValid
    ? null
    : {
        customPasswordValidator: {
          hasMinimumChars,
          hasNumber,
          hasSpecialChar,
          hasCapitalChar,
          hasSmallChar,
        },
      };
};

@Component({
  selector: 'app-register-validation',
  templateUrl: './register-validation.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterValidationComponent {
  readonly dateOfBirthForm: FormGroup = new FormGroup(
    {
      day: new FormControl('', [Validators.min(1), Validators.max(31)]),
      month: new FormControl('', [Validators.min(1), Validators.max(12)]),
      year: new FormControl('', [
        Validators.min(new Date().getFullYear() - 100),
        Validators.max(new Date().getFullYear()),
      ]),
    },
    { validators: customDateOfBirthValidation }
  );
  readonly registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required, customPasswordValidator]),
      repeatPassword: new FormControl('', [Validators.required]),
      dateOfBirthForm: this.dateOfBirthForm,
    },
    { validators: customCrossFieldValidator }
  );
}
