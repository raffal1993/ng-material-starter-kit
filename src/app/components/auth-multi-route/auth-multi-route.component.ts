import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserDataService } from '../../services/user-data.service';
import { LoginAPISuccessModel } from '../../models/loginAPI.model';

@Component({
  selector: 'app-auth-multi-route',
  templateUrl: './auth-multi-route.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthMultiRouteComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _userDataService: UserDataService,
    private _activatedRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;

    this._loginService.login({ email, password }).subscribe({
      next: (d) => {
        this._userDataService.loginUser(d as LoginAPISuccessModel);
        this._router.navigate(['../logged-in'], { relativeTo: this._activatedRoute });
      },
      error: (e) => {
        this.loginForm.setErrors({ invalidCredentials: e.error.message });
        this._cdr.detectChanges();
      },
    });
  }
}
