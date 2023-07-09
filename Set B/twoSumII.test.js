describe('twoSum', () => {
    test('should return the indices of tw numbers that add up to the target', () => {
      const numbers = [2, 7, 11, 15];
      const target = 9;
      const result = twoSum(numbers, target);
      expect(result).toEqual([1, 2]);
    });
});