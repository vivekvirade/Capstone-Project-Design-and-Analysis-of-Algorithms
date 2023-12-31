function flipAndInvertImage(image) {
    // Iterate through each row of the image
    for (let i = 0; i < image.length; i++) {
      // Use a two-pointer approach to reverse the row in-place
      let left = 0;
      let right = image[i].length - 1;
  
      while (left <= right) {
        // Swap elements and invert their values
        [image[i][left], image[i][right]] = [1 - image[i][right], 1 - image[i][left]];
        left++;
        right--;
      }
    }
  
    return image;
  }
  
  // Example 1
  const example1Input = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
  const example1Output = flipAndInvertImage(example1Input);
  console.log("Example 1 Output:", example1Output);
  
  // Example 2
  const example2Input = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
  const example2Output = flipAndInvertImage(example2Input);
  console.log("Example 2 Output:", example2Output);
  