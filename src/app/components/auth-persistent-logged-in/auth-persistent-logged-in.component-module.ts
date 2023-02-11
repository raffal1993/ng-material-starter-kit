import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AuthPersistentLoggedInComponent } from './auth-persistent-logged-in.component';

@NgModule({
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule, MatTableModule],
  declarations: [AuthPersistentLoggedInComponent],
  providers: [],
  exports: [AuthPersistentLoggedInComponent],
})
export class AuthPersistentLoggedInComponentModule { }
