const limitArticle = (size: number, article: string | null): string => {
  if (null != article && article != '' && 0 < size) {
    let a = article.substr(0, size);
    const strs = a.split(' ');
    const lastWord = strs[strs.length - 1];
    const realLastWord = article.split(' ')[strs.length - 1];
    if (realLastWord != lastWord) {
      strs[strs.length - 1] = realLastWord;
      a = strs.join(' ');
    }

    return `${a} ...`;
  }

  return article;
};

export default limitArticle;
