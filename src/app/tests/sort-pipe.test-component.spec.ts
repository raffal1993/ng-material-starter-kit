import { givenNativeElement } from './given';
import { SortPipeTestComponent } from './sort-pipe.test-component';

describe('SortPipe', () => {
  [
    {
      givenData: {
        value: ['b', 'a', 'c'],
        direction: 'desc',
      },
      thenData: 'c,b,a',
    },
    {
      givenData: {
        value: ['b', 'a', 'c'],
        direction: 'asc',
      },
      thenData: 'a,b,c',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData.value} and ${givenData.direction}`, () => {
      expect(
        givenNativeElement(givenData, SortPipeTestComponent).innerHTML
      ).toContain(thenData);
    });
  });
});
