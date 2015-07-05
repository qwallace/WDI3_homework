console.log("We're doing the life decider.");

// The Ultimate Life Decider
// Never make a decision again!

// Part One a. - The Coin of Inevitability

// 1. Create a file called ```decider.js```
// 2. Write a function called ```coinFlip``` that 'console.logs' ```HEADS``` or ```TAILS``` when called
// 3. Add a counter that declares ```WINNER``` in the console when either HEADS or TAILS is flipped 5 times.

var coinFlip = function() {
  var heads = 0;
  var tails = 0;
  while (heads < 5 && tails < 5) {
    var toss = Math.floor(Math.random() * (3 - 1)) + 1;
    if (toss === 1) {
      console.log("HEADS");
      heads += 1;
    } else {
      console.log("TAILS");
      tails += 1;
    }
  }
  console.log("Heads: " + heads);
  console.log("Tails: " + tails);
  if (heads > tails) {
    console.log("Heads is the WINNER!");
  } else {
    console.log("Tails is the WINNER!"); 
  }
}

coinFlip();

// **** Can actually break down the function above into constituent parts so that the
// whole thing is made up of smaller functions rather than one large one. ****


// Part One b. - The Coin App

// 1. Create a file called ```decider.html```
// 2. Find any coin image online 
// 3. Link the ```.js``` file, while you're there you may also decide to add a
// ```.css``` file for some styling
// 4. Now add the necessary components to the ```decider.html``` file so that when
// the coin image is clicked the ```coinFlip``` function result and tally are
// returned somewhere on the page.
 


// Part Two a. - A Second Opinion

// 1. Create a file called ```buckStopsHere.js```
// 2. Make a ```JS``` function that *randomly* returns one of the following strings to the console when called...

//   "No",
//   "Not today",
//   "It is decidedly so",
//   "Without a doubt",
//   "Yes definitely",
//   "You may rely on it",
//   "As I see it yes",
//   "Most likely",
//   "Outlook good",
//   "Signs point to yes",
//   "Reply hazy try again",
//   "Ask again later",
//   "Better not tell you now",
//   "Cannot predict now",
//   "Concentrate and ask again",
//   "Don't count on it",
//   "My reply is no",
//   "My sources say no",
//   "Outlook not so good",
//   "Very doubtful",

