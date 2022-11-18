import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { RegisterModel } from '../../models/register.model';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  constructor(private _registerService: RegisterService) {}

  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.min(1)]),
    zipcode: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  onRegisterFormSubmitted(registerForm: FormGroup) {
    const newUser: RegisterModel = {
      email: registerForm.get('email')?.value,
      password: registerForm.get('password')?.value,
      phone: registerForm.get('phone')?.value,
      username: registerForm.get('username')?.value,
      name: {
        firstname: registerForm.get('firstname')?.value,
        lastname: registerForm.get('lastname')?.value,
      },
      address: {
        city: registerForm.get('city')?.value,
        number: registerForm.get('number')?.value,
        street: registerForm.get('street')?.value,
        zipcode: registerForm.get('zipcode')?.value,
      },
    };

    this._registerService.register(newUser).subscribe();
  }
}
