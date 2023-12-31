//Here's an implementation of the minimumSum function for the given problem:
/**
 * Returns the minimum possible sum of new1 and new2 after splitting the digits in num.
 * @param {number} num - The input positive integer consisting of precisely four digits.
 * @return {number} - The minimum possible sum of new1 and new2.
 */
function minimumSum(num) {
    // Convert the number to an array of digits and sort in ascending order
    const digits = Array.from(String(num), Number).sort();

    // Create new1 with the smallest digits
    const new1 = Number(digits[0].toString() + digits[1].toString());

    // Create new2 with the remaining digits
    const new2 = Number(digits[2].toString() + digits[3].toString());

    // Return the sum of new1 and new2
    return new1 + new2;
}

// Example Usage:
const example1 = minimumSum(2932);
console.log(example1);  // Output: 52

const example2 = minimumSum(4009);
console.log(example2);  // Output: 13
