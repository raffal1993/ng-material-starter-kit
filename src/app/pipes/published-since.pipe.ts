import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'publishedSince' })
export class PublishedSincePipe implements PipeTransform {
  transform(value: string): string {
    const dateNow = new Date().getTime();
    const publishedDate = new Date(value).getTime();

    const timeDiff = dateNow - publishedDate;

    const units = [
      { timeUnit: 'year', ms: 1000 * 60 * 60 * 24 * 365 },
      { timeUnit: 'month', ms: 1000 * 60 * 60 * 24 * 30 },
      { timeUnit: 'week', ms: 1000 * 60 * 60 * 24 * 7 },
      { timeUnit: 'day', ms: 1000 * 60 * 60 * 24 },
      { timeUnit: 'hour', ms: 1000 * 60 * 60 },
    ];

    for (let i = 0; i < units.length; i++) {
      const diff = Math.floor(timeDiff / units[i].ms);
      if (diff >= 1) {
        return diff + ' ' + units[i].timeUnit + (diff !== 1 ? 's' : '') + ' ago';
      }
    }

    return value;
  }
}
