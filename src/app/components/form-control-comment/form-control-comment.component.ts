import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-comment',
  templateUrl: './form-control-comment.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlCommentComponent {
  readonly comment: FormControl<string | null> = new FormControl<string | null>('', [
    Validators.pattern(new RegExp(/(([a-zA-Z0-9]+)\s{1,}){3,}([a-zA-Z0-9]+)/)),
  ]);
}
