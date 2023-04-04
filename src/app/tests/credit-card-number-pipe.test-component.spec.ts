import { CreditCardNumberPipeTestComponent } from './credit-card-number-pipe.test-component';
import { givenNativeElement } from './given';

describe('CreditCardNumberPipeTestComponent', () => {
  [
    {
      givenData: `1234567890123456`,
      thenData: `1234 5678 9012 3456`,
    },
    {
      givenData: `1234 567890123 456`,
      thenData: `1234 5678 9012 3456`,
    },
    {
      givenData: `1234-5678-9012-3456`,
      thenData: `1234 5678 9012 3456`,
    },
    {
      givenData: `1234!5678!9012!3456`,
      thenData: `1234 5678 9012 3456`,
    },
    {
      givenData: `1234@5678-9012+3456`,
      thenData: `1234 5678 9012 3456`,
    },
    {
      givenData: `1234  5678  9012  3456`,
      thenData: `1234 5678 9012 3456`,
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform based on ${givenData}`, () => {
      expect(givenNativeElement(givenData, CreditCardNumberPipeTestComponent).innerHTML).toContain(thenData);
    });
  });

  [
    {
      givenData: `1234567890`,
      error: `Invalid card number string: 1234567890`,
    },
    {
      givenData: `1234  5678  9012  3456 6489`,
      error: `Invalid card number string: 1234  5678  9012  3456 6489`,
    },
    {
      givenData: 1234567890,
      error: `Incorrect input type. It must be a string.`,
    },
    {
      givenData: { creditCardNumber: `1234567890` },
      error: `Incorrect input type. It must be a string.`,
    },
  ].forEach(({ givenData, error }) => {
    it(`should throw error for ${givenData}`, () => {
      expect(() => givenNativeElement(givenData, CreditCardNumberPipeTestComponent)).toThrowError(error);
    });
  });
});
