import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, concatMap, map, merge, Observable, of, timer } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-auth-single-page-be',
  templateUrl: './auth-single-page-be.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSinglePageBeComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
  });

  private _errorMessageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public errorMessage$: Observable<string | number> = this._errorMessageSubject
    .asObservable()
    .pipe(concatMap((value) => merge(of(value), timer(3000).pipe(map(() => '')))));

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;

    if (loginForm.valid)
      this._loginService.login(email, password).subscribe({
        error: (e) => this._errorMessageSubject.next(e.error.message || ''),
        // error: (e) => {
        //   this.loginForm.setErrors({ error: e.error.message });
        //   this.cdr.detectChanges();
        // },
        complete: () => this._router.navigate(['/success']),
      });
  }
}
