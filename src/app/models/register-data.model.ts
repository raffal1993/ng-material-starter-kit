export interface RegisterDataModel {
  user: User;
  providerId?: any;
  _tokenResponse: TokenResponse;
  operationType: string;
}

interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: ProviderDatum[];
  stsTokenManager: StsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}

interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

interface ProviderDatum {
  providerId: string;
  uid: string;
  displayName?: any;
  email: string;
  phoneNumber?: any;
  photoURL?: any;
}

interface TokenResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
