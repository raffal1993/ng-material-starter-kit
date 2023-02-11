export interface LoginAPIModel {
  readonly data: {
    readonly accessToken: string;
    readonly emailVerified: false;
    readonly id: string;
    readonly refreshToken: string;
  };
}
