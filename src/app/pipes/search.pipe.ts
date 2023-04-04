import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(sentence: string, substring: string): string[] | Error {
    const matchedWords = sentence.split(' ').filter((word) => !!word.match(new RegExp(substring, 'i')));

    if (matchedWords.length > 0) return matchedWords;
    throw new Error('No Result');
  }
}
