//Approach 1: 
function isPalindrome(n) {
    let dupNum = 0;
    let backN = n;
    
    while (n) {
        let rem = n % 10;
        dupNum = dupNum * 10 + rem;
        n = Math.floor(n / 10);
    }
    
    if (dupNum === backN) {
        return true;
    }
    
    return false;
}
 
//Approach 2:   Rewrite the above given JavaScript code using the 2-pointer approach.

function isPalindromeTwoPointer(n) {
    if (n < 0) {
        return false; // Negative numbers are not palindromic
    }

    // Convert the number to a string to easily access individual digits
    const numString = n.toString();

    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = numString.length - 1;

    // Compare characters at the corresponding positions from both ends
    while (start < end) {
        if (numString[start] !== numString[end]) {
            return false; // If characters don't match, it's not a palindrome
        }

        // Move the pointers towards the center
        start++;
        end--;
    }

    // If the loop completes without returning false, the number is a palindrome
    return true;
}

// Example Usage:
const result = isPalindromeTwoPointer(121);
console.log(result); // Output: true
