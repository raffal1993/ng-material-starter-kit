import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { ArticleQueryModel } from 'src/app/query-models/article.query-model';
import { EditMode } from 'src/app/query-models/edit-mode.query-model';

@Component({
  selector: 'app-set-article',
  styleUrls: ['./set-article.component.scss'],
  templateUrl: './set-article.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetArticleComponent {
  @Input() buttonText: string | null = '';

  @Input() set form(form: ArticleQueryModel | null) {
    this.formArticle.patchValue({ ...form });
  }

  @Output() setEditMode: EventEmitter<EditMode> = new EventEmitter();
  @Output() setArticle: EventEmitter<Article> = new EventEmitter();

  readonly formArticle: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    content: new FormControl(),
    imageUrl: new FormControl(),
  });

  onFormArticleSubmitted(formArticle: FormGroup): void {
    if (!formArticle.valid) return;
    this.setArticle.emit(formArticle.value);
    this.setEditMode.emit(null);
  }
}
