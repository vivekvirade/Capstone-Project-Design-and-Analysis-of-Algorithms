//Approach 1:
function nextGreatestLetter(letters, target) {
    // binary search

    let ans;
    let check = false;

    let l = 0;
    let size = letters.length;
    let h = size - 1;

    while (l <= h) {
        let mid = h - Math.floor((h - l) / 2);

        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            let currAns = letters[mid];
            check = true;
            if (mid >= 0) {
                h = mid - 1;
            }
            ans = currAns;
        }
    }
    
    if (!check) {
        return letters[0];
    }
    
    return ans;
}
 
//Approach 2: Rewrite the above given JavaScript code using Set 
function nextGreatestLetterWithSet(letters, target) {
    // Create a Set for quick lookup
    const letterSet = new Set(letters);

    // Iterate through the alphabet
    for (let charCode = target.charCodeAt(0) + 1; charCode <= 'z'.charCodeAt(0); charCode++) {
        const nextLetter = String.fromCharCode(charCode);

        // Check if the next letter exists in the set
        if (letterSet.has(nextLetter)) {
            return nextLetter;
        }
    }

    // If no greater letter is found, return the first letter in the set
    return letters[0];
}

// Example Usage:
const result = nextGreatestLetterWithSet(['c', 'f', 'j'], 'a');
console.log(result); // Output: 'c'
