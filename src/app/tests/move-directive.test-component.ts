import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<button data-test-id="directive-button" moveable>Move me</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class MoveDirectiveTestComponent {}
