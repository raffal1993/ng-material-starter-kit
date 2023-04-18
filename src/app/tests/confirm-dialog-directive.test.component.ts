import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<button
    data-test-id="directive"
    [confirmDialog]="data"
    (confirmed)="onConfirmed($event)"
  >
    <button></button>
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ConfirmDialogDirectiveTestComponent {
  data = '';
  onConfirmed($event: boolean) {}
}
