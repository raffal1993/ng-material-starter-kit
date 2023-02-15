export interface UserModel {
  email: string;
  password: string;
}

export interface UserDetailsModel {
  data: {
    user: { id: string; context: Context };
  };
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
}

interface Firebase {
  identities: Identities;
  sign_in_provider: string;
}

interface Identities {
  email: string[];
}
