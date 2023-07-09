/*
Problem Description: Given a sorted array nums, 
remove the duplicates in-pace such that each 
element appears only once and returns the new length.

Slow Fast Pointer
*/

var removeDuplicates = function(nums) {
    // If the array is empty, there are no duplicates
    if (nums.length === 0) return 0;
  
    let slow = 0; // Slow pointer indicates the position to place the next unique element
  
    for (let fast = 1; fast < nums.length; fast++) {
      // If the current element is different from the element at the slow pointer position,
      // it means a new unique element is found
      if (nums[fast] !== nums[slow]) {
        slow++; // Increment slow pointer to the next position
        nums[slow] = nums[fast]; // Place the unique element at the slow pointer position
      }
      // If the current element is equal to the element at the slow pointer position,
      // it means it is a duplicate, so we continue iterating with the fast pointer
    }
  
    // The length of the modified array is equal to the position of the slow pointer plus 1
    return slow + 1;
  };

  module.exports = removeDuplicates;