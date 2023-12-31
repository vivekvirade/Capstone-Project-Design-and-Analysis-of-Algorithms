// Traditional Approach

function findPairWithSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}
 
// Optimized Approach

function findPairWithSum(array, targetSum) {
  const numMap = {};

  for (let i = 0; i < array.length; i++) {
    const difference = targetSum - array[i];
    if (numMap[array[i]]) {
      return [difference, array[i]];
    }
    numMap[difference] = true;
  }

  return [];
}

//Explaination 

// Traditional Approach (Rating: 2):

// The traditional approach uses a nested loop to iterate through the array and find a pair of elements that sum up to the target. While this approach is correct, it has some drawbacks:

// Time Complexity: The nested loop results in a time complexity of O(n^2), which may not be efficient for large arrays.

// Redundant Checks: The loop checks all pairs, including those that have already been checked, leading to redundant comparisons.

// Limited to Pairs: The function is designed specifically for finding a pair with the target sum and does not generalize well for other scenarios.

// Optimized Approach (Rating: 5):

// The optimized approach uses a hash map to keep track of the elements encountered so far. It iterates through the array once, checking for the presence of the complement (difference) in the hash map. This approach is more efficient:

// Time Complexity: The optimized approach has a linear time complexity of O(n), making it more scalable for larger arrays.

// No Redundant Checks: The hash map allows for constant-time lookups, eliminating redundant comparisons and improving efficiency.

// Generalizable: The optimized approach is more versatile and can be easily adapted to find triplets or handle similar problems.

// Space Complexity: The space complexity is O(n), where n is the length of the array, due to the storage of elements in the hash map.

// In summary, the optimized approach is significantly better in terms of time complexity and efficiency. It leverages a hash map to improve the overall performance of finding a pair with the target sum.