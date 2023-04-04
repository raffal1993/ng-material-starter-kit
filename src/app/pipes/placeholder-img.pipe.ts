import { Inject, Pipe, PipeTransform } from '@angular/core';
import { PLACEHOLDER_IMAGE_SOURCE } from '../config/placeholder-image-source';

@Pipe({ name: 'placeholderImg' })
export class PlaceholderImgPipe implements PipeTransform {
  constructor(@Inject(PLACEHOLDER_IMAGE_SOURCE) private _placeholderImageSource: string) {}
  transform(value: string | null): string {
    return value || this._placeholderImageSource;
  }
}
