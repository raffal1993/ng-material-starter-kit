import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { DepartmentsService } from '../../services/departments.service';
import { UsersService } from '../../services/users.service';
import { RoleService } from '../../services/role.service';
import { MultiUserQueryModel } from 'src/app/queryModels/multiUser';
import { RoleModel } from 'src/app/models/role.model';
import { DepartmentModel } from 'src/app/models/department.model';

@Component({
  selector: 'app-multi-users',
  templateUrl: './multi-users.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiUsersComponent {
  readonly users$: Observable<MultiUserQueryModel[]> = combineLatest([
    this._usersService.getAll(),
    this._roleService.getAll(),
    this._departmentsService.getAll(),
  ]).pipe(
    map(([users, roles, departments]) =>
      users.map((user) => ({
        email: user.email || '<NOT-FOUNT>',
        role: this._getRole(user.roleId, roles),
        department: this._getDepartment(user.departmentId, departments),
      }))
    )
  );

  constructor(
    private _departmentsService: DepartmentsService,
    private _usersService: UsersService,
    private _roleService: RoleService
  ) {}

  private _getRole(id: number | string | null, roles: RoleModel[]): string {
    return roles.find((role) => role.id.toString() === id?.toString())?.role || '<NOT-FOUND>';
  }

  private _getDepartment(id: number, departments: DepartmentModel[]): string {
    return departments.find((department) => department.id === id.toString())?.name || '<NOT-FOUND>';
  }

  //   private _getRoleOrDepartment(
  //     type: 'department' | 'role',
  //     id: number | string | null,
  //     array: RoleModel[] | DepartmentModel[]
  //   ): string {
  //     if (type === 'department')
  //       return (
  //         (array as DepartmentModel[]).find((department) => department.id === id?.toString())?.name ||
  //         '<NOT-FOUND>'
  //       );
  //     if (type === 'role')
  //       return (
  //         (array as RoleModel[]).find((role) => role.id.toString() === id?.toString())?.role ||
  //         '<NOT-FOUND>'
  //       );
  //     return '<NOT-FOUND>';
  //   }
}
