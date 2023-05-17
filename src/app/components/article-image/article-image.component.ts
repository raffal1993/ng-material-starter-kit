import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ArticleImageViewModel } from './article-image.view-model';

@Component({
  selector: 'app-article-image',
  styleUrls: ['./article-image.component.scss'],
  templateUrl: './article-image.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleImageComponent {
  @Input() data: ArticleImageViewModel = {
    isEditModeOn: null,
    imageUrl: '',
  };

  private _isImageVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly isImageVisible$: Observable<boolean> = this._isImageVisibleSubject.asObservable();

  setImageVisibility() {
    this._isImageVisibleSubject.next(!this._isImageVisibleSubject.value);
  }
}
