import { Directive, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { RectangleService } from 'src/app/services/rectangle.service';

@Directive({
  selector:
    'input[type=color][formControlName],input[type=color][formControl],input[type=color][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ColorValidatorDirective, multi: true }],
})
export class ColorValidatorDirective implements Validator {
  private _isColorValid: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _rectangle: RectangleService) {}

  @HostListener('change', ['$event'])
  onColorChange(e: InputEvent) {
    if (!this._isColorValid.value) return;
    const input = e.target as HTMLInputElement;
    this._rectangle.setRectangleColor(input.value);
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const val = control.value.replace('#', '');
    const rgb = val.match(/.{1,2}/g);
    const red = parseInt(rgb[0], 16);
    const blue = parseInt(rgb[1], 16);
    const green = parseInt(rgb[2], 16);
    const isRedDominant = red > blue + green;

    this._isColorValid.next(isRedDominant);

    control.setErrors({ invalidColor: true });
    return isRedDominant ? null : { invalidColor: true };
  }
}
