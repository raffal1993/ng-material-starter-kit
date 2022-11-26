import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  readonly employees$: Observable<EmployeesModel[]> =
    this._employeeService.getEmployees();

  private _employeeDetailsIdSubject: Subject<number> = new Subject<number>();

  public employeeDetailsId$: Observable<number> =
    this._employeeDetailsIdSubject.asObservable();

  readonly employeeDetail$: Observable<EmployeesModel> =
    this.employeeDetailsId$.pipe(
      switchMap((id) => this._employeeService.getEmployee(id))
    );

  constructor(private _employeeService: EmployeeService) {}

  showDetails(id: number) {
    this._employeeDetailsIdSubject.next(id);
  }
}
