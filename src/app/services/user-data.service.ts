import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  public _userDataSubject: BehaviorSubject<LoginModel | undefined> = new BehaviorSubject<
    LoginModel | undefined
  >(undefined);
}
