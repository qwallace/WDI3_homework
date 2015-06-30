// use prompt() to get year from user
function askYear() {
  var year = prompt('what year is this?');
  return year;
}

// Get year based on current system date
function getYearCurrent() {
  date = new Date();
  return date.getFullYear();
}

// log reaction to console based on comparison of two years
function checkYear(yearCheck, yearCurret) {
  // reaction strings for past, present, and future
  react = [
    "woah, blast from the past!", 
    "i'm in the present...",
    "greetings from the future!"
  ]

  // compare the check and current years
  // pull reaction from react array
  if(yearCheck < yearCurrent) {
    console.log(react[0]);
  }
  else if(yearCheck == yearCurrent) {
    console.log(react[1]);
  }
  else if(yearCheck > yearCurrent) {
    console.log(react[2]);
  }
  else {
    console.log('i have no idea what is going on');
  }
}

// set current year based on system clock
yearCurrent = getYearCurrent();
// get check year from user
yearCheck = askYear();
// compare check and current years
checkYear(yearCheck, yearCurrent);



