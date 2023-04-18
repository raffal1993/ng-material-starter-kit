import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <input [formControl]="formCtrl" type="url" />
    <div data-test-id="first-error">
      <span *ngIf="formCtrl.getError('mustStartWithHttpOrHttps'); else isValid"
        >invalid</span
      >
    </div>
    <div data-test-id="second-error">
      <span *ngIf="formCtrl.getError('mustEndWithDotDomain'); else isValid"
        >invalid</span
      >
    </div>
    <ng-template #isValid>valid</ng-template>
  `,
})
export class UrlValidatorDirectiveTestComponent {
  formCtrl!: FormControl;
}
