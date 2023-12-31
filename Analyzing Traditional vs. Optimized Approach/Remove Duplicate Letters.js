
// Traditional Approach

class Solution{
    removeDups(str){
        //code here
        let temp = ''+ str[0];
        for(let i=0;i<str.length;i++){
            if(temp.indexOf(str[i]) == -1){
                temp = temp+str[i];
            }
        }
        return temp;
    }
}
 
//Optimized Approach:
class Solution{
    removeDups(str){
        const p=new Set(str);
        const t=[...p];
        return t.join("");
    }
}
 

//Explaination :
// Traditional Approach (Rating: 3):

// The traditional approach uses a simple iterative method to build a new string while checking for duplicates. It maintains the order of characters by checking the index in the temporary string before appending. While this approach is functional, it has some drawbacks:

// Time Complexity: The time complexity is O(n^2) due to the nested loop where temp.indexOf() is called for each character in the original string. This can be improved.

// String Concatenation: String concatenation (temp = temp + str[i]) within the loop is less efficient than using an array and joining at the end.

// Optimized Approach (Rating: 5):

// The optimized approach uses a Set to automatically remove duplicates and then converts the Set back to an array to preserve the original order. This approach is more concise and performs better:

// Time Complexity: The time complexity is O(n), where n is the length of the input string. The Set operations are efficient and don't require nested iterations.

// Space Complexity: The Set and array operations result in O(n) space complexity, where n is the number of unique characters. This is more efficient than the traditional approach.

// Conciseness: The use of Set eliminates the need for manual duplicate checking and appending, making the code more concise and readable.

// In summary, the optimized approach is superior in terms of time complexity, space complexity, and code simplicity. It leverages the Set data structure to efficiently handle duplicates.