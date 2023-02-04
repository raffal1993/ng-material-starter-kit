import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-auth-single-page',
  templateUrl: './auth-single-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSinglePageComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _loginService: LoginService, private _router: Router) {}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;

    this._loginService.login(email, password).subscribe({
      error: () => this._router.navigate(['/error']),
      complete: () => this._router.navigate(['/success']),
    });
  }
}

//                 test@lowgular.io
