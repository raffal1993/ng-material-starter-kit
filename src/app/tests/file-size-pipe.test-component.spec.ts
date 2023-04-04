import { FileSizePipeTestComponent } from './file-size-pipe.test-component';
import { givenNativeElement } from './given';

describe('FileSizePipe', () => {
  [
    {
      givenData: 1,
      thenData: '1 B',
    },
    {
      givenData: 1024,
      thenData: '1 KB',
    },
    {
      givenData: 5 * 1024 * 1024,
      thenData: '5 MB',
    },
    {
      givenData: 3.2 * 1024 * 1024 * 1024,
      thenData: `3.2 GB`,
    },
    {
      givenData: 4.1 * 1024 * 1024 * 1024 * 1024,
      thenData: `4.1 TB`,
    },
    {
      givenData: 6.2 * 1024 * 1024 * 1024 * 1024 * 1024,
      thenData: `6.2 PB`,
    },
  ].forEach(({ givenData, thenData }) => {
    it(`for number value ${givenData}`, () => {
      expect(givenNativeElement(givenData, FileSizePipeTestComponent).innerHTML).toEqual(thenData);
    });
  });
});
