import { Pipe, PipeTransform } from '@angular/core';

const languages = {
  pl: 'pl-PL',
  us: 'en-US',
};

@Pipe({ name: 'date' })
export class DatePipe implements PipeTransform {
  transform(value: string, type?: 'locale' | 'iso', lang?: 'pl' | 'us'): Error | string {
    if (new Date(value).toString() === 'Invalid Date') throw Error('Invalid Date');

    if (type === 'iso') return new Date(value).toISOString().substring(0, 10);
    if (type === 'locale')
      return lang ? new Date(value).toLocaleDateString(languages[lang]) : new Date(value).toLocaleDateString();
    return new Date(value).toDateString();
  }
}
