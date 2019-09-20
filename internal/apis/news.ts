import {AxiosInstance, AxiosResponse} from 'axios';
import Article from '../models/article';

export interface NewsAPIInterface {
  getTopHeadline(): Promise<Article[]>;
}

class NewsAPI implements NewsAPIInterface {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getTopHeadline(): Promise<Article[]> {
    return await this.axios
      .get('/top-headlines', {
        params: {
          country: 'us',
          apiKey:
            '<< NEED YOUR API KEY / BETTER TO THROW IT INTO HEADER AT HTTPCLIENT MODULE >>',
        },
      })
      .then(resp => resp.data.articles);
  }
}

export default NewsAPI;
