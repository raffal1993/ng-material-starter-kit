import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorPasswordsMatch',
})
export class ErrorPasswordsMatchPipe implements PipeTransform {
  transform(value: ValidationErrors | null | undefined): boolean {
    return value?.['customCrossFieldValidator'];
  }
}
