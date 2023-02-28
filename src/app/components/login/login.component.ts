import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _authUser: AuthUserService
  ) {}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;

    if (!loginForm.valid) return;

    this._authUser.loginUser(email, password).subscribe({
      next: (res) => {
        res.user.context.role === 'admin'
          ? this._router.navigate(['/complete-profile'])
          : this._router.navigate(['/logged-in']);
      },
      error: (e) => {
        this.loginForm.setErrors({ HTTPResponseError: e.error ? e.error.message : '' });
        this._cdr.detectChanges();
      },
    });
  }
}
