import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeeService } from '../../services/employee.service';

interface FilterAgeRanges {
  min: number;
  max: number;
  text: string;
}

const FILTER_AGE_RANGES: FilterAgeRanges[] = [
  {
    min: 0,
    max: 100,
    text: 'ALL',
  },
  {
    min: 0,
    max: 20,
    text: '[0-20]',
  },
  {
    min: 21,
    max: 30,
    text: '[21-30]',
  },
  {
    min: 31,
    max: 40,
    text: '[31-40]',
  },
  {
    min: 41,
    max: 50,
    text: '[41-50]',
  },
  {
    min: 51,
    max: 100,
    text: '[51-100]',
  },
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  constructor(private _employeeService: EmployeeService) {}

  /// --------
  ///  SORT
  /// --------
  private _sortBySalarySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Ascending');

  public sortBySalary$: Observable<string> =
    this._sortBySalarySubject.asObservable();

  public sorting: Observable<string[]> = of(['Ascending', 'Descending']);

  sort(typeOfSort: string) {
    this._sortBySalarySubject.next(typeOfSort);
  }
  /// ---------------
  ///  FILTER BY AGE
  /// ---------------

  private _filterByAgeSubject: BehaviorSubject<FilterAgeRanges> =
    new BehaviorSubject<FilterAgeRanges>({ min: 0, max: 100, text: 'ALL' });

  public filterByAge$: Observable<FilterAgeRanges> =
    this._filterByAgeSubject.asObservable();

  public filterByAge: Observable<FilterAgeRanges[]> = of(FILTER_AGE_RANGES);

  filter(type: FilterAgeRanges) {
    this._filterByAgeSubject.next(type);
  }

  /// -----------------
  ///  GET EMPLOYEES
  /// -----------------

  readonly employees$: Observable<EmployeesModel[]> = combineLatest([
    this._employeeService.getEmployees(),
    this.sortBySalary$,
    this.filterByAge$,
  ]).pipe(
    map(
      ([employees, sorting, filter]: [
        EmployeesModel[],
        string,
        FilterAgeRanges
      ]) => {
        //SORTED BY SALARY
        const sortedEmployees = employees.sort((a, b) => {
          if (a.employee_salary > b.employee_salary)
            return sorting === 'Ascending' ? 1 : -1;
          if (a.employee_salary < b.employee_salary)
            return sorting === 'Descending' ? 1 : -1;
          return 0;
        });

        //FILTER BY AGE
        return sortedEmployees.filter(
          (employee) =>
            Number(employee.employee_age) <= filter.max &&
            Number(employee.employee_age) >= filter.min
        );
      }
    )
  );
}
