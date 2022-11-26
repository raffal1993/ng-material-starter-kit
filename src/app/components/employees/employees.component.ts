import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  private _refreshedEmployeesSubject: BehaviorSubject<void> =
    new BehaviorSubject<void>(void 0);

  public refreshedEmployees$: Observable<EmployeesModel[]> =
    this._refreshedEmployeesSubject
      .asObservable()
      .pipe(switchMap(() => this._employeeService.getEmployees()));

  deleteEmployee(id: number) {
    this._employeeService
      .deleteEmployee(id)
      .subscribe(() => this._refreshedEmployeesSubject.next());
  }

  constructor(private _employeeService: EmployeeService) {}
}
