/*
Problem Description: Given an array of integers 
nums containing n + 1 integers where each integer 
is in the range [1, n] inclusive. There is only one 
duplicate number in nums, return this duplicate number

Slow Fast Pointer
*/


var findDuplicate = function(nums) {
    let slow = nums[0]; // Initialize the slow pointer with the first element
    let fast = nums[0]; // Initialize the fast pointer with the first element

    // Move slow pointer by 1 step and fast pointer by 2 steps until they meet
    do {
        slow = nums[slow]; // Move slow pointer by 1 step
        fast = nums[nums[fast]]; // Move fast pointer by 2 steps
    } while (slow !== fast);

    // Move slow pointer to the start and move both pointers by 1 step until they meet again
    slow = nums[0]; // Reset slow pointer to the start
    while (slow !== fast) {
        slow = nums[slow]; // Move slow pointer by 1 step
        fast = nums[fast]; // Move fast pointer by 1 step
    }

    // Return the duplicate number
    return slow;
};

module.exports = findDuplicate;