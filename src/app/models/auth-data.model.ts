export interface AuthDataModel {
  readonly accessToken: string;
  readonly emailVerified: string;
  readonly refreshToken: string;
  readonly id: string;
}

export type RefreshTokenDataModel = Pick<AuthDataModel, 'accessToken' | 'refreshToken' | 'id'>;
