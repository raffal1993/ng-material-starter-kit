import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserDataService } from '../../services/user-data.service';

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

const customCrossFieldValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  const error = password === confirmPassword ? null : { customCrossFieldValidator: true };

  control.get('confirmPassword')?.setErrors(error);
  return error;
};

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  readonly registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [customPasswordValidator]),
      confirmPassword: new FormControl(),
    },
    { validators: customCrossFieldValidator }
  );

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _userDataService: UserDataService
  ) {}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;

    this._loginService.login(email, password).subscribe({
      next: (d) => {
        this._router.navigate(['./']);
        this._userDataService._userDataSubject.next(d);
      },
      error: (e) => {
        this.loginForm.setErrors(e.error.message);
        this._cdr.detectChanges();
      },
    });
  }
}
