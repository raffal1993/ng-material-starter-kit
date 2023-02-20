import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataModel } from '../../models/user-data.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInComponent {
  readonly isUserLogged$: Observable<boolean> = this._authService.isUserLogged();

  readonly userData$: Observable<UserDataModel> = this._userService.getUserData();

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {}

  logout(): void {
    this._authService.logoutUser();
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}
