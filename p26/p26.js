

const fs = require('fs');
// console.log("==========")

// console.log(fs.readFileSync("readme.txt", "utf8").split(" "));

console.log("=========2=")
// console.log(fs.readFileSync("ex1.txt", "utf8").split(" "));

// console.log("==========")

// const fs = require("fs");

// Read the contents of the text file
fs.readFile("ex1.txt", "utf8", (error, text) => {
// fs.readFile("ex2.txt", "utf8", (error, text) => {
  if (error) {
    console.error(error);
  } else {
    // Split the text into an array of words
    const words = text.split(" ");
    // const words = text.split(/[\s\n]+/);
    // const words = text.match(/\b[a-zA-Z]+\b/g);
    // Create an empty object to store the frequency of each word
    const wordCounts = {};

    // Iterate through the array of words and update the frequency count for each word
    for (const word of words) {
      if (word.length > 1 && word in wordCounts) {
        wordCounts[word] += 1;
      } else if (word.length > 1) {
        wordCounts[word] = 1;
      }
    }

    // Find the word with the highest frequency count
    let mostCommonWord = null;
    let maxCount = 0;
    for (const [word, count] of Object.entries(wordCounts)) {
      if (count > maxCount) {
        mostCommonWord = word;
        maxCount = count;
      }
    }
    // console.log(wordCounts)
    // Sort the words in the object by their frequency
    const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    // console.log(sortedWords);

    for (const [word, count] of sortedWords) {
      // console.log(`'${word}' appears ${count} times.`);
    }

    console.log(`The most common word is '${mostCommonWord}' with a frequency of ${maxCount}.`);
  }
});


