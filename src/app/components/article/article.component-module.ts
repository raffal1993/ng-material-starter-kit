import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleImageComponentModule } from '../article-image/article-image.component-module';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [ArticleImageComponentModule, CommonModule],
  declarations: [ArticleComponent],
  providers: [],
  exports: [ArticleComponent],
})
export class ArticleComponentModule {}
