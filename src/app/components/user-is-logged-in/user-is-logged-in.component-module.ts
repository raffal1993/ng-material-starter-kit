import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserIsLoggedInComponent } from './user-is-logged-in.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UserIsLoggedInComponent],
  providers: [],
  exports: [UserIsLoggedInComponent],
})
export class UserIsLoggedInComponentModule {}
