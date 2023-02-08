import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserIdQueryModel } from 'src/app/query-models/user-id.query-model';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-auth-multi-route-logged-in',
  templateUrl: './auth-multi-route-logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthMultiRouteLoggedInComponent {
  readonly userId$: Observable<UserIdQueryModel | null> = this._userDataService.userDataSubject
    .asObservable()
    .pipe(map((d) => d?.data.id || null));

  constructor(
    private _userDataService: UserDataService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  logout() {
    this._userDataService.logoutUser();
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}
