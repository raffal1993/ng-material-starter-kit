import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SetArticleComponent } from './set-article.component';
import { ArticleComponentModule } from '../article/article.component-module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ArticleComponentModule,
  ],
  declarations: [SetArticleComponent],
  providers: [],
  exports: [SetArticleComponent],
})
export class SetArticleComponentModule {}
