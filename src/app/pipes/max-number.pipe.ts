import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maxNumber', pure: false })
export class MaxNumberPipe implements PipeTransform {
  transform(value: number[]): number {
    return Math.max(...value);
  }
}
