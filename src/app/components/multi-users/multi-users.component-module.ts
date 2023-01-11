import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MultiUsersComponent } from './multi-users.component';

@NgModule({
  imports: [MatCardModule, MatGridListModule, CommonModule],
  declarations: [MultiUsersComponent],
  providers: [],
  exports: [MultiUsersComponent],
})
export class MultiUsersComponentModule {}
