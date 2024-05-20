let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter((text) => {
    return text.length >= 5;
  });
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]

/*
let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  return words.length >= 5;
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
*/
