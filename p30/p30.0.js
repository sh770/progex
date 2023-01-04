// let str = "aaaa";

// function remove_a(){
//     let i;
// for(i=0 ;i < str.length; i++){
//     console.log(i);
// };

// };

// remove_a(str);

function removeVowels(s) {
    const vowels = 'aeiou';
    let sWithoutVowels = '';
    for (const char of s) {
      if (!vowels.includes(char)) {
        sWithoutVowels += char;
      }
    }
    return sWithoutVowels;
  }
  
  const inputString = 'javascript';
  const outputString = removeVowels(inputString);
  console.log(outputString);  // Output: "jvscrpt"
  