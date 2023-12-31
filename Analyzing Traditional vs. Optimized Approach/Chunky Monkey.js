// Traditional Approach:

function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
 
//Optimized Approach:


function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

//Explaination:
// Traditional Approach (Rating: 3):

// The traditional approach uses a loop to iterate through the input array and create chunks of a specified size. It uses a temporary array (temp) to accumulate elements until the chunk size is reached, and then it appends the chunk to the result array. While this approach is functional, it has some drawbacks:

// Conditional Check: The condition if (a % size !== size - 1) may be less intuitive and could be simplified.

// Mutable State: The use of the temporary array temp and the subsequent reset is somewhat more complex than necessary.

// Explicit Looping: The loop is explicit and may be seen as less idiomatic in JavaScript.

// Optimized Approach (Rating: 4):

// The optimized approach simplifies the code by using the slice method to directly extract chunks of the specified size from the array. This approach is more concise and avoids the need for a temporary array:

// Simplicity: The code is more concise and easier to understand without the need for explicit checks and a temporary array.

// Immutable State: The use of slice creates a new array without mutating the original array, promoting a more functional programming style.

// Readability: The while loop is straightforward and easier to read compared to the explicit checks in the traditional approach.

// In summary, the optimized approach is an improvement in terms of simplicity, readability, and adherence to a more idiomatic JavaScript style. The use of slice simplifies the process of chunking the array.