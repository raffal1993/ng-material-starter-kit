import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-persistent',
  templateUrl: './auth-persistent.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPersistentComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('test@lowgular.io', [Validators.required]),
    password: new FormControl('test@lowgular.io', [Validators.required]),
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

    this._authService.login({ email, password }).subscribe({
      next: (d) => {
        this._authService.setAuthToken(d.data.accessToken);
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
