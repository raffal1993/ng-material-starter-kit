import { Component } from '@angular/core';

@Component({
  template: `<div data-test-id="pipe-container">
    {{ object | pluck: 'id' }}
  </div>`,
})
export class PluckPipeTestComponent {
  object: Record<string, unknown> = {};
}
