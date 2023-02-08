import { UserModel } from './user.model';

export interface LoginAPIModel {
  readonly data: UserModel;
}

export interface LoginAPISuccessModel {
  readonly data: {
    readonly accessToken: string;
    readonly emailVerified: false;
    readonly id: string;
    readonly refreshToken: string;
  };
}
