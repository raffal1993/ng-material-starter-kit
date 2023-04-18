import { DIALOG_DATA } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatDialogComponent {
  constructor(
    @Inject(DIALOG_DATA)
    readonly data: {
      confirmDialog: string;
      onClose: (confirmation: boolean) => boolean;
    }
  ) {}
}
