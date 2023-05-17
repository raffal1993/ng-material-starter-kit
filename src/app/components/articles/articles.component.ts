import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ArticleQueryModel } from 'src/app/query-models/article.query-model';
import { EditMode } from 'src/app/query-models/edit-mode.query-model';
import { ArticleModel } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-articles',
  styleUrls: ['./articles.component.scss'],
  templateUrl: './articles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent {
  readonly articles$: Observable<ArticleQueryModel[]> = this._articlesService.getAll().pipe(
    map((art) =>
      art.map((a) => ({
        id: a.id,
        content: a.content,
        title: a.title,
        imageUrl: a.imageUrl,
      }))
    )
  );

  private _editModeSubject: BehaviorSubject<EditMode> = new BehaviorSubject<EditMode>(null);

  private _articleToEditSubject: BehaviorSubject<ArticleQueryModel | null> =
    new BehaviorSubject<ArticleQueryModel | null>(null);

  readonly editMode$: Observable<EditMode> = this._editModeSubject.asObservable();

  readonly articleToEdit$: Observable<ArticleQueryModel | null> =
    this._articleToEditSubject.asObservable();

  readonly isEditModeOn$: Observable<boolean> = this._editModeSubject
    .asObservable()
    .pipe(map((editMode) => !!editMode));

  constructor(private _articlesService: ArticlesService) {}

  setEditMode($event: EditMode) {
    this._editModeSubject.next($event);
    this._articleToEditSubject.next(null);
  }

  setArticle(article: ArticleQueryModel) {
    const { id, ...rest } = article;
    if (!this._editModeSubject.value) return;

    if (this._editModeSubject.value === 'add')
      this._articlesService.createArticle(rest).subscribe();
    else if (this._editModeSubject.value === 'edit' && id)
      this._articlesService.updateArticle(rest, id).subscribe();
  }

  setArticleToEdit($event: ArticleQueryModel) {
    this._articleToEditSubject.next($event);
  }
}
