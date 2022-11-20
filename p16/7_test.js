//Q7
/**
 * Given an array of strings, return the count of the number of strings with the given length.

wordsCount(["a", "bb", "b", "ccc"], 1) → 2
wordsCount(["a", "bb", "b", "ccc"], 3) → 1
wordsCount(["a", "bb", "b", "ccc"], 4) → 0
    *  */


function wordsCount(words, len) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === len) {
            count++;
        }
    }
    return count;
}



console.log(wordsCount(["a", "bb", "b", "ccc"], 3)) //→ 1
console.log(wordsCount(["a", "bb", "b", "ccc"], 1)) //→ 2
console.log(wordsCount(["a", "bb", "b", "ccc"], 4)) //→ 0
console.log(wordsCount(["a", "8", "bat5", "cbcc"], 4));
console.log(wordsCount(["a", "8", "bat5", "cb"], 4));