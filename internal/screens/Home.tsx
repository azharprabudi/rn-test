import React, {SFC, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import useTopHeadlinesState from '../hooks/top_headlines';
import ArticleComp from '../components/article';
import Article from '../models/article';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    flexDirection: 'column',
  },
});

const Home: SFC<{}> = () => {
  const [articles, load, error] = useTopHeadlinesState();
  const renderItem = useCallback(
    ({item}) => (
      <ArticleComp
        key={item.title}
        content={item.description}
        onPress={() => {}}
        publishedAt={item.publishedAt}
        title={item.title}
      />
    ),
    [],
  );
  const keyExtractor = useCallback((article: Article) => article.title, []);

  return (
    <View style={styles.container}>
      {load && error.message == '' && <Text>Loading ...</Text>}
      {error.message != '' && <Text>{error.message}</Text>}
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Home;
