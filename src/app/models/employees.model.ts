export interface APIResponseModel<T> {
  readonly status: string;
  readonly data: T;
}

export interface EmployeesModel {
  readonly id: number;
  readonly employee_name: string;
  readonly employee_salary: string;
  readonly employee_age: string;
  readonly profile_image: string;
}
