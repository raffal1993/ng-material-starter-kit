import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { RoleService } from '../../services/role.service';
import { SingleUserQueryModel } from 'src/app/queryModels/singleUser';
import { RoleModel } from 'src/app/models/role.model';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleUserComponent {
  readonly users$: Observable<SingleUserQueryModel[]> = combineLatest([
    this._usersService.getAll(),
    this._roleService.getAll(),
  ]).pipe(
    map(([users, roles]) =>
      users.map((user) => ({
        email: user.email || '<NO-EMAIL>',
        role: this._getUserRole(user.roleId, roles),
      }))
    )
  );

  constructor(private _usersService: UsersService, private _roleService: RoleService) {}

  private _getUserRole(userRoleId: string | number | null, roles: RoleModel[]): string {
    return roles.find((role) => role.id === userRoleId)?.role || '<NO-ROLE>';
  }
}
