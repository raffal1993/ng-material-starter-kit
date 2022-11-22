import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [MatCardModule, NgIf, AsyncPipe],
  declarations: [UserComponent],
  providers: [],
  exports: [UserComponent],
})
export class UserComponentModule {}
