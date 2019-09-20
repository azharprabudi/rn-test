const NewsAPI = require('../news').default;
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const articles = [
  {
    source: {
      id: 'Testing',
      name: 'Testing',
    },
    author: null,
    title: 'Testing',
    description: 'Testing',
    url: 'Testing',
    urlToImage: 'Testing',
    publishedAt: '2019-09-20T01:01:00Z',
    content: 'Testing',
  },
  {
    source: {
      id: 'Testing-2',
      name: 'Testing-2',
    },
    author: null,
    title: 'Testing-2',
    description: 'Testing-2',
    url: 'Testing-2',
    urlToImage: 'Testing-2',
    publishedAt: '2019-09-20T01:01:00Z',
    content: 'Testing-2',
  },
];

describe('Testing NewsAPI', () => {
  let mNewsAPI = null;

  beforeAll(() => {
    const mock = new MockAdapter(axios);
    mock.onGet('/top-headlines').reply(200, {
      articles,
    });

    mNewsAPI = new NewsAPI(axios);
  });

  test('get /top-headlines', async () => {
    const data = await mNewsAPI.getTopHeadline();
    expect(data).toEqual(articles);
  });
});
