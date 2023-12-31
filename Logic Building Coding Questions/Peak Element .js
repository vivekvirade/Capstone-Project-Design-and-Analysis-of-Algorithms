//Find a Peak Element
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Check if mid is a peak element
        if (nums[mid] > nums[mid + 1]) {
            // If mid is greater than its right neighbor, peak might be on the left
            right = mid;
        } else {
            // If mid is less than or equal to its right neighbor, peak might be on the right
            left = mid + 1;
        }
    }

    // At the end of the loop, left and right will be pointing to the peak element
    return left;
};

// Example Usage:
const example1 = findPeakElement([1, 2, 3, 1]);
console.log(example1); // Output: 2

const example2 = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
console.log(example2); // Output: 5
