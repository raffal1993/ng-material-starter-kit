export interface LoginModel {
  readonly data: DataLoginAPI;
}

interface DataLoginAPI {
  readonly email: string;
  readonly password: string;
}
