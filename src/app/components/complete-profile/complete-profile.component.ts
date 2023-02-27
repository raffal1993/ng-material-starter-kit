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
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteProfileComponent {
  constructor(
    private _cdr: ChangeDetectorRef,
    private _authUser: AuthUserService,
    private _roter: Router
  ) {}
  readonly userProfileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onUserProfileFormSubmitted(userProfileForm: FormGroup): void {
    const firstName = userProfileForm.get('firstName')?.value;
    const lastName = userProfileForm.get('lastName')?.value;

    if (!userProfileForm.valid) return;

    this._authUser.updateUserProfile({ firstName, lastName }).subscribe({
      next: () => this._roter.navigate(['/logged-in']),
      error: (e) => {
        this.userProfileForm.setErrors({ HTTPResponseError: e.error ? e.error.message : '' });
        this._cdr.detectChanges();
      },
    });
  }
}
