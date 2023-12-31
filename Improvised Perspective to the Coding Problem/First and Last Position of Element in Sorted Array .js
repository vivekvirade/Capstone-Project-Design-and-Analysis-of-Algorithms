//Approach 1:
var searchRange = function(nums, target) {
    //O(n) approach

    var ans=[];
    for(let i=0;i<nums.length;i++){
      if(nums[i]==target){
          ans.push(i);
          break;
      }
    }
 for(let i=nums.length-1;i>=0;i--){
      if(nums[i]==target){
          ans.push(i);
          break;
      }
    }
if(ans.length==0){
ans.push(-1);
ans.push(-1);
}
    return ans;
};
 
//Approach 2: Rewrite the above given JavaScript code using the Binary search algorithm.
var searchRangeBinarySearch = function(nums, target) {
    // Binary search approach

    // Helper function to find the first occurrence of the target
    const findFirstOccurrence = (nums, target) => {
        let start = 0, end = nums.length - 1, result = -1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (nums[mid] >= target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }

            if (nums[mid] === target) {
                result = mid;
            }
        }

        return result;
    };

    // Helper function to find the last occurrence of the target
    const findLastOccurrence = (nums, target) => {
        let start = 0, end = nums.length - 1, result = -1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (nums[mid] <= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }

            if (nums[mid] === target) {
                result = mid;
            }
        }

        return result;
    };

    // Use helper functions to find the first and last occurrences
    const firstOccurrence = findFirstOccurrence(nums, target);
    const lastOccurrence = findLastOccurrence(nums, target);

    // Return the result as an array
    return [firstOccurrence, lastOccurrence];
};

// Example Usage:
const result = searchRangeBinarySearch([5, 7, 7, 8, 8, 10], 8);
console.log(result); // Output: [3, 4]
