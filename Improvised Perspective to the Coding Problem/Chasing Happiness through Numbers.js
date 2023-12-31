//Approach 1:
function isHappy(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let slow = n;
    let fast = n;

    do {
        slow = calculateSumOfSquares(slow);
        fast = calculateSumOfSquares(calculateSumOfSquares(fast));
    } while (slow !== fast);

    return slow === 1;
}

//Approach 2: Rewrite the above code using Set Object.
function isHappyUsingSet(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // Use a Set to keep track of encountered numbers
    const seenNumbers = new Set();

    // Continue until n becomes 1 (happy number) or a cycle is detected
    while (n !== 1 && !seenNumbers.has(n)) {
        // Add the current value of n to the set
        seenNumbers.add(n);
        
        // Update n to the sum of squares of its digits
        n = calculateSumOfSquares(n);
    }

    // Return true if n is 1 (happy number), false otherwise
    return n === 1;
}

// Example Usage:
const result = isHappyUsingSet(19);
console.log(result); // Output: true
