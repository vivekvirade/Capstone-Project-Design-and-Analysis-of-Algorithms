//Here's an implementation of the sortColors function based on the provided hints:
/**
 * Sorts the array of colors (0, 1, 2) in-place.
 * @param {number[]} nums - The input array of colors.
 */
function sortColors(nums) {
    let redPtr = 0;     // Pointer for the red section
    let whitePtr = 0;   // Pointer for the white section
    let bluePtr = nums.length - 1;  // Pointer for the blue section

    while (whitePtr <= bluePtr) {
        if (nums[whitePtr] === 0) {
            // Swap with the red section
            [nums[redPtr], nums[whitePtr]] = [nums[whitePtr], nums[redPtr]];
            redPtr++;
            whitePtr++;
        } else if (nums[whitePtr] === 1) {
            // Increment whitePtr for the white section
            whitePtr++;
        } else {
            // Swap with the blue section
            [nums[whitePtr], nums[bluePtr]] = [nums[bluePtr], nums[whitePtr]];
            bluePtr--;
            // Note: Do not increment whitePtr after swapping, as the new value should be re-evaluated
        }
    }
}

// Example Usage:
const example1 = [2, 0, 2, 1, 1, 0];
sortColors(example1);
console.log(example1);  // Output: [0, 0, 1, 1, 2, 2]

const example2 = [2, 0, 1];
sortColors(example2);
console.log(example2);  // Output: [0, 1, 2]
