//Here's an implementation of the transitionPoint function using both the binary search approach and the linear scan approach:
/**
 * Finds the transition point in the sorted array containing only 0s and 1s.
 * @param {number[]} arr - The input array.
 * @return {number} - The index of the transition point or -1 if there is no transition point.
 */
function transitionPoint(arr) {
    // Binary Search Approach
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
            // Found the transition point
            return mid;
        } else if (arr[mid] === 1) {
            // Continue searching in the left half
            high = mid - 1;
        } else {
            // Continue searching in the right half
            low = mid + 1;
        }
    }

    // If no transition point is found
    return -1;

    // Linear Scan Approach
    // for (let i = 0; i < arr.length - 1; i++) {
    //     if (arr[i] === 0 && arr[i + 1] === 1) {
    //         return i + 1;
    //     }
    // }

    // If no transition point is found
    // return -1;
}

// Example Usage:
const example1 = transitionPoint([0, 0, 0, 1, 1]);
console.log(example1);  // Output: 3

const example2 = transitionPoint([0, 0, 0, 0]);
console.log(example2);  // Output: -1
