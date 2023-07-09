/*
Problem Description: Given n non-negative integers 
a1, a2, ..., an, where each represents a point at 
coordinate (i, ai). n vertical lines are drawn, and
 the two endpoints of the line i are at 
 (i, ai) and (i, 0). Find two lines, which, 
 together with the x-axis, forms a container that 
 contains the most water.

*/

var maxArea = function(height) {
    const n = height.length;
    let left = 0; // Left pointer starting from the leftmost line
    let right = n - 1; // Right pointer starting from the rightmost line
    let maxArea = 0; // Variable to store the maximum area

    while (left < right) {
        // Calculate the current area between the lines at left and right pointers
        const currentArea = Math.min(height[left], height[right]) * (right - left);

        // Update maxArea if the current area is greater
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer that points to the smaller line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

module.exports = maxArea;