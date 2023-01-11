import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../models/department.model';

@Injectable({ providedIn: 'root' })
export class DepartmentsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<DepartmentModel[]> {
    return this._httpClient.get<DepartmentModel[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/departments`
    );
  }
}
