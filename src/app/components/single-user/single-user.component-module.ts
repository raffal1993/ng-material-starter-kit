import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SingleUserComponent } from './single-user.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [SingleUserComponent],
  providers: [],
  exports: [SingleUserComponent],
})
export class SingleUserComponentModule {}
