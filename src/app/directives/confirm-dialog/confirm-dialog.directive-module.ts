import { NgModule } from '@angular/core';
import { MatDialogComponentModule } from '../../components/mat-dialog/mat-dialog.component-module';
import { ConfirmDialogDirective } from './confirm-dialog.directive';

@NgModule({
  imports: [MatDialogComponentModule],
  declarations: [ConfirmDialogDirective],
  providers: [],
  exports: [ConfirmDialogDirective],
})
export class ConfirmDialogDirectiveModule {}
