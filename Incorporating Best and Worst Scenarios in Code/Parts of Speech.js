// Frame Story Function
function frameStory(inputString) {
    const words = inputString.split(" ");
  
    // Mapping of parts of speech
    const partOfSpeechMap = {
      noun: ["dog", "cat", "horse", "hill"],
      verb: ["chased", "trotted"],
      adjective: ["big", "elegant", "green"],
      // Add more parts of speech as needed
    };
  
    // Replace words with corresponding parts of speech
    const replacedStory = words.map((word) => {
      if (partOfSpeechMap[word]) {
        // Get a random word from the corresponding part of speech
        const randomWord =
          partOfSpeechMap[word][Math.floor(Math.random() * partOfSpeechMap[word].length)];
        return randomWord;
      } else {
        return word;
      }
    });
  
    // Construct the story
    const finalStory = replacedStory.join(" ");
  
    return finalStory;
  }
  
  // Example 1: Best-Case Scenario
  const bestCaseInput = "The noun verb the adjective noun.";
  const bestCaseOutput = frameStory(bestCaseInput);
  console.log("Best-Case Output:", bestCaseOutput);
  
  // Example 2: Worst-Case Scenario
  const worstCaseInput = "An adjective noun verb over the adjective noun.";
  const worstCaseOutput = frameStory(worstCaseInput);
  console.log("Worst-Case Output:", worstCaseOutput);
  