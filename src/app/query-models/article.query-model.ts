import { Article } from '../models/article.model';

export type ArticleQueryModel = Article & { id?: string };
