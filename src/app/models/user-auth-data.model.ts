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

export interface UserAuthDataModel {
  user: { id: string; context: Context };
}

interface Context {
  iss: string;
  aud: string;
  auth_time: number;
  user_id: string;
  sub: string;
  iat: number;
  exp: number;
  email: string;
  email_verified: boolean;
  firebase: Firebase;
  uid: string;
  role: string;
}

interface Firebase {
  identities: Identities;
  sign_in_provider: string;
}

interface Identities {
  email: string[];
}
