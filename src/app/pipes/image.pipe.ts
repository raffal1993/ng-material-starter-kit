import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {
  constructor(@Inject('IMAGE_SRC') private _imageSrc: string) {}
  transform(value: string | null): string {
    return value || this._imageSrc;
  }
}
