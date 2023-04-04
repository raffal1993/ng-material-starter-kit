import { Pipe, PipeTransform } from '@angular/core';

//prettier-ignore
const directionalNumbers= ['12', '13', '14', '15', '16', '17', '18', '22', '23', '24', '25', '29', '32', '33', '34', '41', '42', '43', '44', '46', '48', '52', '54', '55', '56', '58', '59', '61', '62', '63', '65', '67', '68', '71', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '89', '91', '94', '95']

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    let prefix: string = '';
    let phoneNumber = value;

    if (phoneNumber.startsWith('0048')) {
      phoneNumber = phoneNumber.slice(4);
    } else if (phoneNumber.startsWith('+48')) {
      phoneNumber = phoneNumber.slice(3);
    }

    phoneNumber = phoneNumber.replace(/\s/g, '');

    if (phoneNumber.length !== 9) throw Error('Invalid Phone Number');

    directionalNumbers.some((dNum) => {
      if (phoneNumber.startsWith(dNum)) {
        prefix = dNum;
        phoneNumber = phoneNumber.slice(2);
        return true;
      }
      return false;
    });

    const finalNumber = prefix
      ? `+48 (${prefix}) ${[
          ...phoneNumber.slice(0, 3),
          ' ',
          ...phoneNumber.slice(3, 5),
          ' ',
          ...phoneNumber.slice(5, 7),
        ].join('')} `
      : `+48 ${[...phoneNumber.slice(0, 3), ' ', ...phoneNumber.slice(3, 6), ' ', ...phoneNumber.slice(6, 9)].join(
          ''
        )}`;

    return finalNumber;
  }
}
