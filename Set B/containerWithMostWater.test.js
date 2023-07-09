const maxArea = require('./maxArea');

describe('Container With Mot Water', () => {
  test('Example 1', () => {
    const height = [1, 1, 2];
    const expectedMaxArea = 1;
    expect(maxArea(height)).toBe(expectedMaxArea);
  });
});
