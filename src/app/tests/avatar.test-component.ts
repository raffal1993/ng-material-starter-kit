import { Component } from '@angular/core';

@Component({
  template: `
    <avatar
      data-test-id="component"
      [imageUrl]="data.imageUrl"
      [text]="data.text"
    ></avatar>
  `,
})
export class AvatarTestComponent {
  data!: { imageUrl: string; text: string };
}
