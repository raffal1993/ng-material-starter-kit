import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  readonly user$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._userService.getUser(data['id']))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {}
}
