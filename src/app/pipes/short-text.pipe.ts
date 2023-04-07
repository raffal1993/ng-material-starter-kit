import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortText' })
export class ShortTextPipe implements PipeTransform {
  transform(value: string): string {
    const str = value.split('');

    if (str.length >= 10) {
      return `${str.splice(0, 10).join('')} ...`;
    }
    return value;
  }
}
