import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { ArticleQueryModel } from 'src/app/query-models/article.query-model';
import { ArticleViewModel } from './article.view-model';

@Component({
  selector: 'app-article',
  styleUrls: ['./article.component.scss'],
  templateUrl: './article.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Output() setEditMode: EventEmitter<void> = new EventEmitter();
  @Output() setArticleToEdit: EventEmitter<ArticleQueryModel> = new EventEmitter();
  @Input() isEditModeOn: boolean | null = null;

  @Input() data: ArticleViewModel = {
    id: '',
    title: '',
    content: '',
    imageUrl: '',
  };

  @Input() isPreview: boolean = false;

  onClick() {
    this.setEditMode.emit();
    this.setArticleToEdit.emit({
      id: this.data.id,
      title: this.data.title,
      content: this.data.content,
      imageUrl: this.data.imageUrl,
    });
  }
}
