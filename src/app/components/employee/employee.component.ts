import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-employee',
  styleUrls: ['./employee.component.scss'],
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent {
  constructor(private _employeeService: EmployeeService) {}

  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required]),
  });

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    const employee: EmployeeModel = {
      name: employeeForm.get('name')?.value || '',
      age: employeeForm.get('age')?.value || '',
      salary: employeeForm.get('salary')?.value || '',
    };
    this._employeeService.create(employee).subscribe();
  }
}
