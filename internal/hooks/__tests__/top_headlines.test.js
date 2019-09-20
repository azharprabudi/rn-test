const React = require('react');
const {View, Text} = require('react-native');
const MockAdapter = require('axios-mock-adapter');
const {render, waitForElement} = require('react-native-testing-library');
const NewsClient = require('../../httpclient/news').default;
const useTopHeadlinesState = require('../top_headlines').default;

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

describe('Testing useTopHeadlinesState as function hook', () => {
  beforeAll(() => {
    const mock = new MockAdapter(NewsClient);
    mock.onGet('/top-headlines').reply(200, {
      articles,
    });
  });

  it('Testing state', async () => {
    const TestingComponent = () => {
      const [articles, loading, error] = useTopHeadlinesState();
      return (
        <View>
          {loading && <Text testID={'test__loading'}>loading ...</Text>}
          {!loading && articles.length > 0 && (
            <Text testID={'test__articles__text'}>Success get articles</Text>
          )}
          {!loading &&
            articles.map(article => (
              <Text testID={'test__articles__title'}>{article.title}</Text>
            ))}
        </View>
      );
    };

    const comp = render(<TestingComponent />);
    expect(comp.getByTestId('test__loading').instance.props.children).toBe(
      'loading ...',
    );

    await waitForElement(() => {
      expect(
        comp.getByTestId('test__articles__text').instance.props.children,
      ).toBe('Success get articles');
    });

    await waitForElement(() => {
      expect(comp.getAllByTestId('test__articles__title').length).toBe(
        articles.length,
      );
      expect(
        comp.getAllByTestId('test__articles__title')[0].props.children,
      ).toBe(articles[0].title);
      expect(
        comp.getAllByTestId('test__articles__title')[1].props.children,
      ).toBe(articles[1].title);
    });
  });
});
