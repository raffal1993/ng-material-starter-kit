import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  transform(value: number): string {
    const suffix = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    let i = 0;
    let val = value;

    do {
      val = val / 1024;
      i = i + 1;
    } while (val >= 1);

    return `${val * 1024} ${suffix[i - 1]}`;
  }
}
