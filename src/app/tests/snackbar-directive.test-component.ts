import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<button
    data-test-id="directive-button"
    [showSnackbarOnClick]="data"
  >
    Show Snackbar
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarDirectiveTestComponent {
  data = '';
}
