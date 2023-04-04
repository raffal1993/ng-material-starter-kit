import { givenNativeElement } from './given';
import { SearchPipeTestComponent } from './search-pipe.test-component';

describe('SearchPipe', () => {
  [
    {
      givenData: {
        value: 'Some text that is searchable',
        term: 'earch',
      },
      thenData: 'searchable',
    },
    {
      givenData: {
        value: 'Some awesome somewhat something well done',
        term: 'some',
      },
      thenData: 'Some,awesome,somewhat,something',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData.value} and ${givenData.term}`, () => {
      expect(givenNativeElement(givenData, SearchPipeTestComponent).innerHTML).toContain(thenData);
    });
  });

  [
    {
      givenData: {
        value: 'Some awesome somewhat something well done',
        term: 'searchable',
      },
      error: 'No Result',
    },
  ].forEach(({ givenData, error }) => {
    it(`should throw error for ${givenData}`, () => {
      expect(() => givenNativeElement(givenData, SearchPipeTestComponent)).toThrowError(error);
    });
  });
});
