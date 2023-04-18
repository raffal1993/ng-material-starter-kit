import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<div data-test-id="directive">
      <div *featureFlag="data; else fallback">Enabled</div>
    </div>
    <ng-template #fallback>Fallback</ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureFlagDirectiveTestComponent {
  data = '';
}
