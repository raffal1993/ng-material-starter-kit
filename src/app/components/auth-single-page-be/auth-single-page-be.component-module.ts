import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AuthSinglePageBeComponent } from './auth-single-page-be.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatCardModule,
  ],
  declarations: [AuthSinglePageBeComponent],
  providers: [],
  exports: [AuthSinglePageBeComponent],
})
export class AuthSinglePageBeComponentModule {}
