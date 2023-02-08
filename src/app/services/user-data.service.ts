import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginAPISuccessModel } from '../models/loginAPI.model';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  public userDataSubject: BehaviorSubject<LoginAPISuccessModel | null> =
    new BehaviorSubject<LoginAPISuccessModel | null>(null);

  loginUser(userData: LoginAPISuccessModel) {
    this.userDataSubject.next(userData);
  }

  logoutUser() {
    this.userDataSubject.next(null);
  }
}
