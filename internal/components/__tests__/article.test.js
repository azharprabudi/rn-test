const React = require('react');
const {Text} = require('react-native');
const Article = require('../article').default;
const {render} = require('react-native-testing-library');

describe('Testing Article Child Component', () => {
  it('should render correctly', () => {
    const onPress = jest.fn();
    const jsonOfComp = render(
      <Article onPress={onPress} title={''} content={''} publishedAt={''} />,
    ).toJSON();

    expect(jsonOfComp).toMatchSnapshot();
  });

  it('props are render correctly', () => {
    const props = {
      title: 'hello',
      content: 'hello',
      publishedAt: 'hello',
      onPress: jest.fn(),
    };

    const {getByTestId} = render(<Article {...props} />);
    expect(getByTestId('article__title').instance.props.children).toBe(
      props.title,
    );
    expect(getByTestId('article__published-at').instance.props.children).toBe(
      props.publishedAt,
    );
    expect(getByTestId('article__content').instance.props.children).toBe(
      props.content,
    );
  });
});
