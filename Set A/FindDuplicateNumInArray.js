/*
Problem Description: Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
some elements appear twice and others appear once. 
Find all the elements that appear twice in the array.
Cyclic Sort 
*/

var findDuplicates = function(nums) {
    const duplicates = []; // Array to store duplicate numbers

    let i = 0; // Index variable for iteration
    while (i < nums.length) {
        if (nums[i] !== nums[nums[i] - 1]) {
            // If the current number is not at its correct index
            // Swap the current number with the number at its correct index
            [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
        } else {
            // If the current number is at its correct index, move to the next number
            i++;
        }
    }

    // Iterate through the array again to find numbers that are not in their correct positions
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1) {
            // If the current number is not at the expected position, it's a duplicate
            // Push it into the duplicates array
            duplicates.push(nums[j]);
        }
    }

    return duplicates; // Return the array of duplicate numbers
};

module.exports = findDuplicates;