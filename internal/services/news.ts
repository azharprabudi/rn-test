import Article from '../models/article';
import dayjs from 'dayjs';
import {NewsAPIInterface} from '../apis/news';
import limitArticle from '../helpers/limit_article';

export interface NewsServiceInterface {
  getTopHeadline(): Promise<Article[]>;
}

class NewsService implements NewsService {
  private api: NewsAPIInterface;
  constructor(api: NewsAPIInterface) {
    this.api = api;
  }

  async getTopHeadline(): Promise<Article[]> {
    const articles: Article[] = await this.api.getTopHeadline();
    return articles.map((val: Article) => ({
      ...val,
      description: limitArticle(200, val.description),
      publishedAt: dayjs(val.publishedAt).format('YYYY-MM-DD'),
    }));
  }
}

export default NewsService;
