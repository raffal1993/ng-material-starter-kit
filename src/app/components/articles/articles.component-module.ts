import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponentModule } from '../article/article.component-module';
import { SetArticleComponentModule } from '../set-article/set-article.component-module';
import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [ArticleComponentModule, CommonModule, SetArticleComponentModule],
  declarations: [ArticlesComponent],
  providers: [],
  exports: [ArticlesComponent],
})
export class ArticlesComponentModule {}
