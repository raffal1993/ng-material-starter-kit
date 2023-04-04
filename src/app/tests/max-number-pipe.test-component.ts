import { Component } from '@angular/core';

@Component({
  template: `<div data-test-id="pipe-container">
    {{ data | maxNumber }}
  </div>`,
})
export class MaxNumberPipeTestComponent {
  data: number[] = [];
}
