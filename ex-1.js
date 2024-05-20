let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map((text) => {
    return text.split("").length;
  });
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]

/*
let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.split("").length;
}

const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]
*/
