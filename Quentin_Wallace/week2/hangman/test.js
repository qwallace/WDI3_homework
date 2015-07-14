console.log("This is the test file");

var word = ["r", "a", "i", "l", "s"];

var letterArray = ["r", "g", "a", "l", "x", "i"];

var array1 = [];

// Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and
  // underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word

var check = function(word) {

}

var checkTheLetters = function(guessedLetters){
    // iterate over the array
    // if letter true => push letter to array
    // if letter false => push "_" to array
    // use difference to create an array of the letters not in the first array
    // var array1 = [];
    // var array2 = [];
    // var string = [];
    // _.each(letterArray, check)

    _.each(word, function(element, index, list) {
      if (_.contains(letterArray, list[index])) {
        array1.push(list[index]);
      } else {
        array1.push("_");
      }
    });

    // _.each(guessedLetters, 
    //   if (_.contains(word, guessedLetters[i])) {
    //     array1.push(guessedLetters[i]);
    //   } else {
    //       array1.push("_");
    //   }
    // );

    // for (var i = 0; i < guessedLetters.length; i++) {
    //   if (_.contains(word, guessedLetters[i])) {
    //     array1.push(guessedLetters[i]);
    //   } else {
    //       array1.push("_");
    //   }
    // }


    // for (var i = 0; i < guessedLetters.length; i++) {
    //   for (var j = 0; j < word.length; j++) {
    //     if (word[j] === guessedLetters[i]) {
    //       array1.push(guessedLetters[i]);
    //     } else {
    //       array1.push("_");
    //     }
    //   }
    // }
    console.log(array1.join(""));
}

checkTheLetters(letterArray);