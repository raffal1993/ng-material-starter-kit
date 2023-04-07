import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price' })
export class PricePipe implements PipeTransform {
  transform(value: string): string {
    const price = Number(value);
    return isNaN(price) ? value : `${price}`;
  }
}
