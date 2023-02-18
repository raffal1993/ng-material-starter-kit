import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInComponent {
  readonly isUserLogged$: Observable<boolean> = this._authService.isUserLogged();

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  logout(): void {
    this._authService.logoutUser();
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}
