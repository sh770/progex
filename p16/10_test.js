//Q10
/**
 Given an array of strings, 
 return a new array without the strings that are equal to the target string.
 One approach is to count the occurrences of the target string,
 make a new array of the correct length, 
 and then copy over the correct strings.

wordsWithout(["a", "b", "c", "a"], "a") → ["b", "c"]
wordsWithout(["a", "b", "c", "a"], "b") → ["a", "c", "a"]
wordsWithout(["a", "b", "c", "a"], "c") → ["a", "b", "a"]
*/

function wordsWithout(words, target) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== target) {
            arr.push(words[i]);
        }
    }
    return arr;
}
let words = ["a", "b", "c", "a"];
let target = "a";
console.log(wordsWithout(words,"a"))

