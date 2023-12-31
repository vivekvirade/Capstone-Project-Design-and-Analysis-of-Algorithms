//Approach 1: 
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    
    for(let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }
    
    for(let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
    }
    
    let sum = (sumAlice + sumBob) / 2;
    
    for(let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];
        
        let b = sum - (sumAlice - a);
        
        if(bobSizes.includes(b))
            return [a, b];
    }
};
 
//Approach 2:  Rewrite the above JavaScript code using Hashmap
var fairCandySwapWithHashMap = function(aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    
    // Calculate the sum of candies for Alice and Bob
    for (let size of aliceSizes) {
        sumAlice += size;
    }

    for (let size of bobSizes) {
        sumBob += size;
    }

    // Calculate the target sum for fair exchange
    let targetSum = (sumAlice + sumBob) / 2;

    // Create a HashMap to store candy sizes for quick lookup
    const bobSizesMap = new Map();
    for (let size of bobSizes) {
        bobSizesMap.set(size, true);
    }

    // Iterate through Alice's candy sizes to find a fair swap
    for (let aliceSize of aliceSizes) {
        let bobSize = targetSum - (sumAlice - aliceSize);

        // Check if Bob has a candy of the calculated size
        if (bobSizesMap.has(bobSize)) {
            return [aliceSize, bobSize];
        }
    }
};

// Example Usage:
const result = fairCandySwapWithHashMap([1, 2, 5], [2, 4]);
console.log(result); // Output: [5, 4]
