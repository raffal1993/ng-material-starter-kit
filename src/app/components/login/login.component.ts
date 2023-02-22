import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _authService: AuthService
  ) {}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;

    if (!loginForm.valid) return;

    this._authService.login(email, password).subscribe({
      next: () => {
        this._router.navigate(['../logged-in'], { relativeTo: this._activatedRoute });
      },
      error: (e) => {
        if (e.hasOwnProperty('error') && e.error.hasOwnProperty('message')) {
          this.loginForm.setErrors({ invalidCredentials: e.error.message });
          this._cdr.detectChanges();
        } else console.warn(e);
      },
    });
  }
}
