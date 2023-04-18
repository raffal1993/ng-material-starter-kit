import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog.component';

@NgModule({
  imports: [MatDialogModule],
  declarations: [MatDialogComponent],
  providers: [],
  exports: [MatDialogComponent],
})
export class MatDialogComponentModule {}
