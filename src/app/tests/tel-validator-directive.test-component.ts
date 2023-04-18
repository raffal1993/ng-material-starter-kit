import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <input
      data-test-id="input"
      [formControl]="formCtrl"
      type="tel"
      [pattern]="pattern"
    />
    <div data-test-id="tel-error">
      <span *ngIf="formCtrl.getError('pattern'); else isValid">invalid</span>
    </div>
    <ng-template #isValid>valid</ng-template>
  `,
})
export class TelValidatorDirectiveTestComponent {
  pattern!: string;
  formCtrl!: FormControl;
}
