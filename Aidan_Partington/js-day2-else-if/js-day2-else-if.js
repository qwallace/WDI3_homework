//https://gist.github.com/epoch/309e4a021cd06f8ae32b

// For this lab, you'll be researching JavaScript's else if statement, and creating 
//one of your own.
// Write an else if statement that checks to see if a variable called year is in 
//the past, present, or future.
// You'll console.log three possible messages depending on what year it is...
// // "I'm in the present!" if the year is equal to 2015
// // "Whoa! Blast from the past!" if the year is less than 2015
// // "Greetings from the future!" if the year is greater than 2015
// Bonus Challenge Research JavaScript's date methods, and find one that 
//will return to you the current, four digit year. Once you have grabbed 
//that year, assign it to a variable, and use that in your else if statement.

var year

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

function pastPresentFuture(year) {
  if (year<yyyy) {
    console.log('Whoa! Blast from the past!')
  } else if (year>yyyy) {
    console.log('Greetings from the future!')
  } else if (year ==yyyy) {
    console.log("I'm in the present!")
  }
}

