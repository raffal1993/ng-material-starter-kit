import { NgModule } from '@angular/core';
import { BottomSheetDirectiveModule } from 'src/app/directives/bottom-sheet/bottom-sheet.directive-module';
import { HelpComponent } from './help.component';

@NgModule({
  imports: [BottomSheetDirectiveModule],
  declarations: [HelpComponent],
  providers: [],
  exports: [HelpComponent],
})
export class HelpComponentModule {}
