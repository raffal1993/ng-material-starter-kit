export interface LoginAPIModel {
  readonly data: LoginData;
}

export interface LoginData {
  readonly accessToken: string;
  readonly emailVerified: false;
  readonly id: string;
  readonly refreshToken: string;
}
