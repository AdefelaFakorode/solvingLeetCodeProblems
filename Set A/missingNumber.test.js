const missingNumber = require("./missingNumber");

describe("Missing Number", () => {
  test("Example 1", () => {
    const nums = [3, 0, 1];
    expect(missingNumber(nums)).toBe(2);
  });

  test("Example 2", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(missingNumber(nums)).toBe(0);
  });

  test("Example 3", () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    expect(missingNumber(nums)).toBe(8);
  });
});
