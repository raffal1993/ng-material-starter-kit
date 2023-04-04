import { FilterPipeTestComponent } from './filter-pipe.test-component';
import { givenNativeElement } from './given';

describe('FilterPipe', () => {
  [
    {
      givenData: {
        value: [1, 2, 3, 4, 5],
        criterion: (param: number) => param % 2 === 0,
      },
      thenData: JSON.stringify([2, 4], null, 2),
    },
    {
      givenData: {
        value: ['a', 'b', 'c', 'd', 'e'],
        criterion: (param: string) => /[aeiou]/i.test(param) === false,
      },
      thenData: JSON.stringify(['b', 'c', 'd'], null, 2),
    },
    {
      givenData: {
        value: [{ v: 1 }, { v: 2 }, { v: 3 }],
        criterion: (param: { v: number }) => param.v > 2,
      },
      thenData: '3',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData.value}`, () => {
      expect(givenNativeElement(givenData, FilterPipeTestComponent).innerHTML).toContain(thenData);
    });
  });
});
