import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creditCardNumber' })
export class CreditCardNumberPipe implements PipeTransform {
  transform(value: unknown): unknown {
    if (typeof value !== 'string') throw Error('Incorrect input type. It must be a string.');

    const numbers = value.split('').filter((v) => !!v.match(/[0-9]/));

    if (numbers.length !== 16) throw Error(`Invalid card number string: ${value}`);

    return numbers.map((n, i) => (i % 4 === 0 ? ` ${n}` : n)).join('');
  }
}
