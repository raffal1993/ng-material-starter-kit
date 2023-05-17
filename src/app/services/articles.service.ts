import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, ArticleModel } from '../models/article.model';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ArticleModel[]> {
    return this._httpClient.get<ArticleModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/articles-with-comments'
    );
  }

  createArticle(article: Article): Observable<Article> {
    return this._httpClient.post<Article>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/articles-with-comments',
      { ...article }
    );
  }

  updateArticle(article: Article, id: string): Observable<Article> {
    return this._httpClient.put<Article>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/articles-with-comments/${id}`,
      { ...article }
    );
  }
}
