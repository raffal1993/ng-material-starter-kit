import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(value: string[] | null, direction: 'asc' | 'desc' | undefined): string[] {
    if (!value) return [];
    const dir = direction || 'asc';

    return value.sort((a, b) => {
      if (dir === 'asc') return a > b ? 1 : -1;
      if (dir === 'desc') return a > b ? -1 : 1;
      return 0;
    });
  }
}
