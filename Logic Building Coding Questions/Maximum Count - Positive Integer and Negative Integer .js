//Here's an implementation of the maxCount function for the given problem:
/**
 * Returns the result of the maxCount function applied to the number
 * of positive integers and the number of negative integers in the nums array.
 * @param {number[]} nums - The input array sorted in non-decreasing order.
 * @return {number} - The result of the maxCount function.
 */
function maxCount(nums) {
    let posCount = 0;  // Count of positive integers
    let negCount = 0;  // Count of negative integers

    // Iterate through the array
    for (const num of nums) {
        if (num > 0) {
            // Increment posCount for positive integers
            posCount++;
        } else if (num < 0) {
            // Increment negCount for negative integers
            negCount++;
        }
        // Note: Skip 0, as it is neither positive nor negative
    }

    // Return the maximum count among posCount and negCount
    return Math.max(posCount, negCount);
}

// Example Usage:
const example1 = maxCount([-2, -1, -1, 1, 2, 3]);
console.log(example1);  // Output: 3

const example2 = maxCount([-3, -2, -1, 0, 0, 1, 2]);
console.log(example2);  // Output: 3

const example3 = maxCount([5, 20, 66, 1314]);
console.log(example3);  // Output: 4
