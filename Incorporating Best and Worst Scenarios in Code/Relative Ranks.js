function findRelativeRanks(score) {
    // Create a copy of the score array and sort it in descending order
    const sortedScore = [...score].sort((a, b) => b - a);
  
    // Create a map to store the ranks based on the sorted order
    const rankMap = new Map();
    for (let i = 0; i < sortedScore.length; i++) {
      switch (i) {
        case 0:
          rankMap.set(sortedScore[i], "Gold Medal");
          break;
        case 1:
          rankMap.set(sortedScore[i], "Silver Medal");
          break;
        case 2:
          rankMap.set(sortedScore[i], "Bronze Medal");
          break;
        default:
          rankMap.set(sortedScore[i], (i + 1).toString());
          break;
      }
    }
  
    // Map the ranks to the original order
    const result = score.map((s) => rankMap.get(s));
  
    return result;
  }
  
  // Example 1
  const example1Input = [5, 4, 3, 2, 1];
  const example1Output = findRelativeRanks(example1Input);
  console.log("Example 1 Output:", example1Output);
  
  // Example 2
  const example2Input = [10, 3, 8, 9, 4];
  const example2Output = findRelativeRanks(example2Input);
  console.log("Example 2 Output:", example2Output);
  