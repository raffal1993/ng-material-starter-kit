import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsModel } from 'src/app/models/user.model';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-logged-in',
  templateUrl: './auth-logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoggedInComponent {
  readonly userID$: Observable<string | null> = this._authService.getUserID();
  readonly userDetails$: Observable<UserDetailsModel> = this._userDetailsService.getUserDetails();

  constructor(private _authService: AuthService, private _userDetailsService: UserDetailsService) {}

  logout() {
    this._authService.logoutUser();
  }
}
