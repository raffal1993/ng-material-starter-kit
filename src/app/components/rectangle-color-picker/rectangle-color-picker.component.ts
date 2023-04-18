import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rectangle-color-picker',
  templateUrl: './rectangle-color-picker.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rectangle-color-picker.component.style.css'],
})
export class RectangleColorPickerComponent {
  readonly colorPickerForm: FormGroup = new FormGroup({
    colorPicker: new FormControl('#ff0000'),
  });
}
