import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/services/auth-admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginAdminComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _authAdmin: AuthAdminService
  ) {}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;

    if (!loginForm.valid) return;

    this._authAdmin.loginAdmin(email, password).subscribe({
      next: (e) => {
        this._router.navigate(['/logged-in']);
      },
      error: (e) => {
        this.loginForm.setErrors({
          HTTPResponseError: e.error ? e.error.message : '',
          isAdminExist: 'Non existing admin',
        });

        this._cdr.detectChanges();
      },
    });
  }
}
