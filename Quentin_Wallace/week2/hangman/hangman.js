
console.log("We're doing hangman");

var word = {
  secretWord: "",
  lettersCorrect: [],
  lettersWrong: [],
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],
 
  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
    word.secretWord = _.sample(word.wordList);
    console.log(word.secretWord);
    // var i = Math.floor(Math.random() * word.wordList.length);
    //console.log(word.wordList[i]);
  },
 
  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and
  // underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){

    // var lettersCorrect = []; dead code
    // var lettersWrong = []; dead code
    var secretWordArray = word.secretWord.split("");

    console.log("This is the guessed letters", guessedLetters);
    
    console.log("This is the secret word array", secretWordArray);

    // For getting letterWrong array
    _.each(guessedLetters, function(element, index, list) {

      if (_.contains(secretWordArray, element)) {
        console.log('correct', element);
        // lettersCorrect.push(element);
      } else {
        console.log('wrong', element);
          word.lettersWrong.push(element);
      }
    });

    // For getting letterCorrect array
    _.each(secretWordArray, function(element, index, list) {

      if (_.contains(guessedLetters, element)) {
        console.log("Correct", element);
        word.lettersCorrect.push(element);
      } else {
        console.log("Wrong", element);
        word.lettersCorrect.push("_");
      }
    });
      // Printing out to check if arrays are correct
      console.log('Letters Correct', word.lettersCorrect);
      console.log('Letters Wrong', word.lettersWrong);
  }
};

// var addUnderscore = function(letterToCheck) {
//   if (letterToCheck )
// }
 
var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],
 
  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
    player.guessedLetters.push(letter);
    player.MAX_GUESSES--;
    word.checkLetters(guessedLetters);
    console.log("The letters", player.guessedLetters);
    console.log("Guesses left", player.MAX_GUESSES);

  },
 
  // Check if the player has won and end the game if so
  checkWin: function(wordString){},
 
  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){}
};
 
var game = {
  // Resets the game
  resetGame: function(){
    word.secretWord = "";
    player.MAX_GUESSES = 8;
    player.guessedLetters = [];
  },
 
  // Reveals the answer to the secret word and ends the game
  giveUp: function(){},
 
  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
};
 
window.onload = function(){
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};