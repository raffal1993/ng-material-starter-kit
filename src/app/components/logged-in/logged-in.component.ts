import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthStorageService } from '../../services/auth-storage.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInComponent {
  readonly email$: Observable<string | null> = this._authStorageService.getEmail();
  readonly isAdmin$: Observable<boolean> = this._authStorageService.isAdmin();

  constructor(private _authStorageService: AuthStorageService, private _router: Router) {}

  logout(): void {
    this._authStorageService.logoutUser();
    this._router.navigate(['/login-user']);
  }
}
