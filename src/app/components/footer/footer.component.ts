import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FooterViewModel } from './footer.view-model';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() copyrights: string = '';

  @Input() company: FooterViewModel = {
    name: '',
    url: '',
  };
}
