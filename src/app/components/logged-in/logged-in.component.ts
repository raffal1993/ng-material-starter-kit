import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  logout(): void {
    this._authService.logoutUser();
    this._router.navigate(['/register']);
  }
}
