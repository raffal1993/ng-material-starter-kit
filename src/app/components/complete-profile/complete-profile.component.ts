import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthAdminService } from '../../services/auth-admin.service';
import { AuthStorageService } from '../../services/auth-storage.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteProfileComponent {
  readonly isProfileComplete$: Observable<boolean> =
    this._authStorageService.isUserProfileComplete();

  constructor(
    private _cdr: ChangeDetectorRef,
    private _authAdmin: AuthAdminService,
    private _roter: Router,
    private _authStorageService: AuthStorageService
  ) {}
  readonly userProfileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onUserProfileFormSubmitted(userProfileForm: FormGroup): void {
    const firstName = userProfileForm.get('firstName')?.value;
    const lastName = userProfileForm.get('lastName')?.value;

    if (!userProfileForm.valid) return;

    this._authAdmin.updateProfile({ firstName, lastName }).subscribe({
      next: (e) => {
        this._roter.navigate(['/logged-in']);
      },
      error: (e) => {
        this.userProfileForm.setErrors({ HTTPResponseError: e.error ? e.error.message : '' });
        this._cdr.detectChanges();
      },
    });
  }
}
