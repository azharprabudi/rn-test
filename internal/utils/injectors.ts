import NewsAPI from '../apis/news';
import NewsService from '../services/news';
import NewsClient from '../httpclient/news';

const Injector = (() => {
  const mNewsAPI = new NewsAPI(NewsClient);
  const mNewsService = new NewsService(mNewsAPI);

  return {
    NewsService: mNewsService,
  };
})();

export default Injector;
