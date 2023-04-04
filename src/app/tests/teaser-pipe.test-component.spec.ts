import { givenNativeElement } from './given';
import { TeaserPipeTestComponent } from './teaser-pipe.test-component';

describe('TeaserPipe', () => {
  [
    {
      givenData: {
        text: 'Some text that is fine',
        minSentences: 10,
      },
      thenData: 'Some text that is fine',
    },
    {
      givenData: {
        text: 'Some text that is definitely too long',
        minSentences: 5,
      },
      thenData: 'Some text that is definitely ...',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData}`, () => {
      expect(
        givenNativeElement(givenData, TeaserPipeTestComponent).innerHTML
      ).toContain(thenData);
    });
  });
});
