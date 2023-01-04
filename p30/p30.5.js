function longestPalindrome(str) {
    // Initialize a variable to store the length of the longest palindrome
    let longest = 0;
    // Initialize a variable to store the longest palindrome
    let longestPalindrome = "";
    // Iterate over the string, starting at each character
    for (let i = 0; i < str.length; i++) {
      // Iterate over the string, ending at each character
      for (let j = i + 1; j <= str.length; j++) {
        // Get the substring between the start and end indices
        const subStr = str.substring(i, j);
        // Check if the substring is a palindrome
        if (isPalindrome(subStr) && subStr.length > longest) {
          // If it is, update the longest palindrome and its length
          longest = subStr.length;
          longestPalindrome = subStr;
        }
      }
    }
    // Return the longest palindrome
    return longestPalindrome;
  }
  
  // Helper function to check if a string is a palindrome
  function isPalindrome(str) {
    // Turn the string into an array of characters and reverse it
    const reversed = str.split('').reverse();
    // Join the reversed array back into a string and compare it to the original
    return str === reversed.join('');
  }

  const result = longestPalindrome("ijklmnabcdedcbaefghijklmno");
console.log(result); // "abcba"

