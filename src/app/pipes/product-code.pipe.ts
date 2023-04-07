import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'productCode' })
export class ProductCodePipe implements PipeTransform {
  transform(value: string, name: string): string {
    const pCode = value.padStart(3, '0');
    const consonants = name.match(/[bcdfghjklmnpqrstvwxyz]/gi) || '';
    const firstThreeConsonants = [...consonants.slice(0, 3)].join('');

    return `${pCode}${firstThreeConsonants}`;
  }
}
