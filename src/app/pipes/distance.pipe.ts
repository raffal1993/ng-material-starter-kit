import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'distance' })
export class DistancePipe implements PipeTransform {
  transform(value: string | number): string | Error {
    const distance = Number(value);

    if (distance > 0 && distance <= 750) {
      return `${parseFloat(distance.toFixed(2))} m`;
    } else if (distance > 750) {
      return `${parseFloat((distance / 1000).toFixed(2))} km`;
    }
    throw new Error();
  }
}
