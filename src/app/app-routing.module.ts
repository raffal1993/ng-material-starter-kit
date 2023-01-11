import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { SingleJobComponent } from './components/single-job/single-job.component';
import { MultiUsersComponent } from './components/multi-users/multi-users.component';
import { SingleUserComponentModule } from './components/single-user/single-user.component-module';
import { SingleJobComponentModule } from './components/single-job/single-job.component-module';
import { MultiUsersComponentModule } from './components/multi-users/multi-users.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'query-single-user', component: SingleUserComponent },
      { path: 'query-array-single-job', component: SingleJobComponent },
      { path: 'query-string-multi-user', component: MultiUsersComponent },
    ]),
    SingleUserComponentModule,
    SingleJobComponentModule,
    MultiUsersComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
