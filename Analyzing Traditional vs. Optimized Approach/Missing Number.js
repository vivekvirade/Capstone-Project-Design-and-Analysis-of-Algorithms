//Traditional Approach:
var missingNumber = function(arr) {
    let n=arr.length;
     let hashSet = new Set();
 
  // Add all elements of array to hashset
  for (let i = 0; i < n ; i++) {
    hashSet.add(arr[i]);
  }
 
  // Check each integer from 1 to n
  for (let i = 1; i <= n; i++) {
    // If integer is not in hashset, it is the missing integer
    if (!hashSet.has(i)) {
      return i;
    }
  }
 
  // If no integer is missing, return n+1
  return 0;
};
 
//Optimized Approach:
var missingNumber = function(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};
// Explaination :

// Traditional Approach (Rating: 2):

// The traditional approach uses a HashSet to store the elements of the array and then iterates from 1 to n to find the missing number. While this approach works, it has some drawbacks. The space complexity is O(n) due to the HashSet, and the time complexity is also O(n) due to the two for loops.

// Space Complexity: The HashSet increases the space complexity, which is not optimal.

// Time Complexity: The two loops contribute to a linear time complexity, which can be improved.

// Optimized Approach (Rating: 5):

// The optimized approach utilizes the array itself for in-place manipulation, reducing the space complexity to O(1). It employs a cyclic sort technique where each element is moved to its correct position. Then, a second pass identifies the missing number. This approach is more efficient.

// Space Complexity: O(1) space complexity is a significant improvement over the traditional approach.

// Time Complexity: The two-pass strategy still results in O(n) time complexity, but it avoids the overhead of managing a HashSet.

// In-Place Manipulation: The optimized approach modifies the array in place, which is more memory-efficient.

// Cyclic Sort: Utilizing the cyclic sort algorithm is a clever way to find the missing number without the need for additional data structures.

// In summary, the optimized approach is superior in terms of space complexity and maintains a comparable time complexity, making it a more efficient solution.