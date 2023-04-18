import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { MatDialogComponent } from '../../components/mat-dialog/mat-dialog.component';

@Directive({ selector: '[confirmDialog]' })
export class ConfirmDialogDirective {
  @Input() confirmDialog: string = '';

  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @HostListener('click') onDialogOpen() {
    this._matDialog.open(MatDialogComponent, {
      data: {
        confirmDialog: this.confirmDialog,
        onClose: (confirmation: boolean) => this.confirmed.emit(confirmation),
      },
    });
    //       .afterClosed()
    //       .pipe(take(1))
    //       .subscribe((confirmation) => {
    //         this.confirmed.emit(confirmation);
    //       });
  }

  constructor(private _matDialog: MatDialog) {}
}
