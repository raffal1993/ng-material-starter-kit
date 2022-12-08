import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { APIResponseModel, EmployeesModel } from '../models/employees.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getEmployees(): Observable<EmployeesModel[]> {
    return this._httpClient
      .get<APIResponseModel<EmployeesModel[]>>(`/api/v1/employees`)
      .pipe(map((res) => res.data));
  }
}
