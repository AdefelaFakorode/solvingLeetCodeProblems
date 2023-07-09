/*
Problem Description: 
Given an array containing n distinct numbers 
taken from 0, 1, 2, ..., n, find th missing number.

Cyclic Sort

*/

var missingNumber = function (nums) {
  let i = 0;
  //iter. through the array
  while (i < nums.length) {
    // If the current number is not equal to its index and it is within the range of the array,
    // swap it with the number at its correct index
    if (nums[i] !== i && nums[i] < nums.length) {
      [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]];
    } else {
      // otherwise add 1
      i++;
    }
  }

  // Iterate over the array again to find the missing number
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) {
      return j;
    }
  }

  // If no missing number is found, the missing number is the last index (length of the array)
  return nums.length;
};

module.exports = missingNumber;
