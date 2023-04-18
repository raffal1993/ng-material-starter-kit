import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<button data-test-id="directive" [deleteProduct]="data">
    Delete
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteProductDirectiveTestComponent {
  data = 0;
}
