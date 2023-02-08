import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login.model';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly data: Observable<LoginModel | undefined> =
    this._userDataService._userDataSubject.asObservable();
  constructor(private _userDataService: UserDataService, private _router: Router) {}

  logout() {
    this._userDataService._userDataSubject.next(undefined);
    this._router.navigate(['./auth-single-page']);
  }

  ngOnInit(): void {
    this.data.subscribe((d) => console.log(d));
  }
}
