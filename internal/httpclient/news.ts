import axios from 'axios';

const NewsClient = axios.create({
  baseURL: 'http://newsapi.org/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default NewsClient;
