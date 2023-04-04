import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(value: unknown[], filterFn: (v: unknown) => unknown): unknown {
    return value.filter((v) => filterFn(v));
  }
}
