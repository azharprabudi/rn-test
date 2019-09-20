import React, {SFC, Fragment} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

type ArticleProps = {
  title: string;
  content: string;
  publishedAt: string;
  onPress: (id: string) => void;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
    padding: 4,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  title: {
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold',
  },
  meta: {
    fontSize: 12,
  },
  wrapContent: {},
  content: {
    flexWrap: 'wrap',
    marginTop: 4,
    marginBottom: 4,
    fontSize: 14,
  },
});

const Article: SFC<ArticleProps> = (props: ArticleProps) => {
  const onPressArticle = () => props.onPress(props.title);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPressArticle}>
        <Fragment>
          <Text testID="article__title" style={styles.title}>
            {props.title}
          </Text>
          <Text testID="article__published-at" style={styles.meta}>
            {props.publishedAt}
          </Text>
          <Text testID="article__content" style={styles.content}>
            {props.content}
          </Text>
        </Fragment>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default React.memo(Article);
