import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetDirective } from './bottom-sheet.directive';

@NgModule({
  imports: [MatBottomSheetModule],
  declarations: [BottomSheetDirective],
  providers: [],
  exports: [BottomSheetDirective],
})
export class BottomSheetDirectiveModule {}
