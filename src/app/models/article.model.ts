export interface ArticleModel {
  createdAt: string;
  title: string;
  imageUrl: string;
  content: string;
  comments: Comment[];
  id: string;
  article: Article;
}

export interface Article {
  content: string;
  title: string;
  imageUrl: string;
}

interface Comment {
  text: string;
  user: User;
}

interface User {
  avatar: string;
  name: string;
}
