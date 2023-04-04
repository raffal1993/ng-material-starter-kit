import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'teaser' })
export class TeaserPipe implements PipeTransform {
  transform(value: string, minWords: number): string {
    const str = value.split(' ');

    if (str.length > minWords) {
      return `${str.splice(0, minWords).join(' ')} ...`;
    }

    return value;
  }
}
