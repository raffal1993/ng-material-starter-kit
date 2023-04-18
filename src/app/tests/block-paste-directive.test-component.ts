import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<input data-test-id="directive" blockPaste />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class BlockPasteDirectiveTestComponent {}
