import { Component } from '@angular/core';

@Component({
  template: `<read-more-panel
    [mainText]="data.mainText"
    [readMoreText]="data.readMoreText"
    [openLabel]="data.openLabel"
    [closedLabel]="data.closedLabel"
  ></read-more-panel>`,
})
export class ReadMorePanelTestComponent {
  data!: {
    mainText: string;
    readMoreText: string;
    openLabel: string;
    closedLabel: string;
  };
}
