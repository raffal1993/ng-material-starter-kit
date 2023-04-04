import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'iban' })
export class IbanPipe implements PipeTransform {
  transform(value: string): string {
    let number = value.replace(/\s/g, '');

    if (number.startsWith('PL')) {
      number = number.slice(2);
    }
    if (isNaN(Number(number)) || number.length !== 26) throw Error('IBAN number is incorrect');

    //prettier-ignore
    return `PL${number.substring(0,2)} ${number.substring(2,6)} ${number.substring(6,10)} ${number.substring(10,14)} ${number.substring(14,18)} ${number.substring(18,22)} ${number.substring(22,26)}`;
  }
}
