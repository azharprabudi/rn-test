type ArticleSource = {
  id: any;
  name: string;
};

type Article = {
  source: ArticleSource;
  author: string;
  title: string;
  description?: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export default Article;
