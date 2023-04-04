import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data.text | teaser: data.minSentences }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserPipeTestComponent {
  data = { text: '', minSentences: 0 };
}
