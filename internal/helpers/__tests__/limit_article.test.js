const limitArticle = require('../limit_article').default;

describe('Testing limitArticle Helper Function', () => {
  it('not handle nullable string', () => {
    expect(limitArticle(100, null)).toBe(null);
  });

  it('not handle empty string', () => {
    expect(limitArticle(100, '')).toBe('');
  });

  it('not handle zero size', () => {
    expect(limitArticle(0, 'hello world')).toBe('hello world');
  });

  it('should return kondel ula ula ...', () => {
    expect(limitArticle(24, 'kondel ula ula alu alu ola ola')).toBe(
      'kondel ula ula alu alu ola ...',
    );
  });

  it('should return aadc ...', () => {
    expect(limitArticle(2, 'aadc')).toBe('aadc ...');
  });
});
