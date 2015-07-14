
console.log("We're squeezing words.");

var squeeze = function(word) {

  var wordString = word.split("");

  var newWord = [];

  var prevLetter = "";

  for (var i = 0; i < wordString.length; i++) {
    if (wordString[i] !== prevLetter) {
      newWord.push(wordString[i]);
    }
    prevLetter = wordString[i];
  }
  newWord = (newWord.join(""));
  console.log(newWord);
}

squeeze("beehee");