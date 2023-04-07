import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'selectedName' })
export class SelectedNamePipe implements PipeTransform {
  transform(value: string, match: string): string {
    if (match === ' ' || !match) return value;
    return !!value.match(match) ? `*${value}*` : value;
  }
}
