
console.log("We're doing palindromes.");

// ###PALINDROME

// ---

// A palindrome is a word, phrase, number, or other sequence of characters
// which reads the same backward or forward.

// Write a function named "palindrome" that accepts one parameter, a STRING.
// If the word is a palindrome return true, if not return false.

// EXAMPLE:

// palindrome("Glenn")  #=> false
// palindrome("Anna")   #=> true

// Make a list of words and test your program 

// [List of Palindromic words](http://www.palindromelist.net/)

var palindrome = function(word) {
  var reverse = word.toLowerCase().split(' ').reverse().join('');
  // var wordJoin = word.split(" ").join("");
  if (word === reverse) {
    console.log(word + " is a palindrome.");
  } else {
    console.log(word + " is not a palindrome.");
  }
  console.log(reverse);
}

palindrome("a bat tuba");

var pWord = "a bat tuba";

console.log(pWord.replace());