import { Directive, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({ selector: '[showSnackbarOnClick]' })
export class SnackBarDirective {
  @Input() showSnackbarOnClick: string = '';

  @HostListener('click') onClick() {
    this._matSnackBar.open(this.showSnackbarOnClick);
  }

  constructor(private _matSnackBar: MatSnackBar) {}
}
