import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { JobsComponent } from './jobs.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
  ],
  declarations: [JobsComponent],
  providers: [],
  exports: [JobsComponent],
})
export class JobsComponentModule {}
