function maxBitwise(nums) {
    let maxAnd = 0;
  
    // Iterate through all possible pairs
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        // Calculate the bitwise AND of the current pair
        const currentAnd = nums[i] & nums[j];
  
        // Update maxAnd if the current AND value is greater
        if (currentAnd > maxAnd) {
          maxAnd = currentAnd;
        }
      }
    }
  
    return maxAnd;
  }
  
  // Example 1
  const example1Input = [2, 3, 4, 5, 6];
  const example1Output = maxBitwise(example1Input);
  console.log("Example 1 Output:", example1Output);
  
  // Example 2
  const example2Input = [10, 12, 6, 8];
  const example2Output = maxBitwise(example2Input);
  console.log("Example 2 Output:", example2Output);
  