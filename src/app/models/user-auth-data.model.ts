export interface UserLoginDataModel {
  readonly accessToken: string;
  readonly emailVerified: string;
  readonly refreshToken: string;
  readonly id: string;
}

export interface UserProfileDataModel {
  readonly firstName: string;
  readonly lastName: string;
}
