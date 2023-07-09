const removeDuplicates = require('./removeDuplicates');

describe('Remove Duplicates from Sorted Aray', () => {
  test('Example 1', () => {
    const nums = [1, 1, 2];
    const expectedLength = 2;
    expect(removeDuplicates(nums)).toBe(expectedLength); // Check the returned length of the modified array
    expect(nums.slice(0, expectedLength)).toEqual([1, 2]); // Check the contents of the modified array
  });
});