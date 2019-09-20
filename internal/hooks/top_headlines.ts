import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import Injector from '../utils/injectors';
import Article from '../models/article';

const useTopHeadlinesState = (): [Article[], boolean, Error] => {
  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<Error>(new Error());
  const [articles, setNews] = useState<Article[]>([]);

  useEffect(() => {
    Injector.NewsService.getTopHeadline()
      .then((news: Article[]) => {
        setNews(news);
        setLoad(false);
      })
      .catch((e: Error) => {
        setError(e);
        setLoad(false);
      });
  }, []);

  return [articles, load, error];
};

export default useTopHeadlinesState;
