// Traditional Approach

function enchantedArrayShuffling(originalArray) {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  const shuffledArray = [];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    } else {
      shuffledArray.push(sortedArray[left]);
      shuffledArray.push(sortedArray[right]);
    }

    left++;
    right--;
  }

  return shuffledArray;
}
 

// Optimized Approach

function enchantedArrayShuffling(originalArray) {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  const shuffledArray = [];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    shuffledArray.push(sortedArray[left++]);
    shuffledArray.push(sortedArray[right--]);
  }

  if (left === right) {
    shuffledArray.push(sortedArray[left]);
  }

  return shuffledArray;
}
 
//Explaination 
// Traditional Approach (Rating: 3):

// The traditional approach sorts the original array and then creates a shuffled array by interleaving elements from the beginning and end of the sorted array. While this approach works, there are some improvements that can be made:

// Conditional Check: The condition if (left === right) introduces a special case that can be simplified. The loop condition could also be < instead of <=.

// Mutating Variables: The left++ and right-- operations within the push statements can make the code less readable.

// Redundant Checks: The condition if (left === right) introduces redundancy; it could be handled within the loop.

// Optimized Approach (Rating: 4):

// The optimized approach simplifies the code by eliminating the special case and handling the check within the loop. It also removes the explicit left++ and right-- operations from the push statements:

// Simplicity: The removal of the special case and the simplification of the loop condition make the code more straightforward.

// Immutable State: The use of left++ and right-- within the push statements can make the code slightly less readable. The optimized approach avoids this.

// Loop Condition: The loop condition is simplified to < instead of <=, which is more idiomatic for this type of loop.

// In summary, the optimized approach is an improvement over the traditional approach, primarily in terms of simplicity and readability. It eliminates redundant checks and simplifies the loop structure.
