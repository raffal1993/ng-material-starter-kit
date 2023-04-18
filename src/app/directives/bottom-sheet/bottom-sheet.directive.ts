import { Directive, HostListener } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from 'src/app/components/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

@Directive({ selector: '[bottomSheet]' })
export class BottomSheetDirective {
  @HostListener('click')
  onclick() {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
  constructor(private _bottomSheet: MatBottomSheet) {}
}
