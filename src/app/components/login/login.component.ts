import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private _loginService: LoginService) {}

  readonly loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const user: LoginModel = {
      username: loginForm.get('username')?.value,
      password: loginForm.get('password')?.value,
    };
    this._loginService.login(user).subscribe();
  }
}
