import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _cdr: ChangeDetectorRef
  ) {}

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    const email = registerForm.get('email')?.value;
    const password = registerForm.get('password')?.value;

    if (!registerForm.valid) return;

    this._authService.register(email, password).subscribe({
      next: () => {
        this._router.navigate(['/login']);
      },
      error: (e) => {
        this.registerForm.setErrors({ HTTPResponseError: e.error.message });
        this._cdr.detectChanges();
      },
    });
  }
}
