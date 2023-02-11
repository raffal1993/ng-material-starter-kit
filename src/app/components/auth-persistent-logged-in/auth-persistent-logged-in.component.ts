import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDataQueryModel } from '../../query-models/user-auth.query-model';
import { Context } from '../../models/user-auth.model';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-persistent-logged-in',
  templateUrl: './auth-persistent-logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPersistentLoggedInComponent {
  private _userData = ['uid', 'email'];
  readonly user$: Observable<UserDataQueryModel[]> = this._usersService.userAuth().pipe(
    map((d) =>
      this._userData.map(
        (userD) =>
          ({
            name: userD,
            value: d.data.user.context[userD as keyof Context],
          } as UserDataQueryModel)
      )
    )
  );

  constructor(
    private _usersService: UsersService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService
  ) {}

  logout(): void {
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
    this._authService.removeAuthToken();
  }
}
