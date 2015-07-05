console.log("Let's play mini golf.");

// Mini Golf Scores

// Exercise 
// Bob, Jimbo and Fish love mini golf. But, like all good golfers they enjoy
// the 19th hole the most. Every time they hand in their score cards none of
// the scores are ever totalled. Write a function called ```totalScores``` in
// JS that calculates their scores and 'console.logs' the total for the club house.

// var scores = {
//   bob:[3, 2, 6, 11, 9, 2, 6, 9, 10],
//   jimbo:[5, 12, 9, 22, 13, 7, 16, 10, 11],
//   fish:[2, 2, 4, 5, 4, 3, 6, 4, 1],
//   par:[3, 4, 5, 5, 3, 3, 4, 3, 5]
// }

// Extension 
// Now work out each golfers round compared to the course par.

// var getBob = function() {
//   var totalScore = 0;
//   for (var i = 0; i < scores.bob.length; i++) {
//     return scores.bob[i];
//   }
//   totalScore += scores.bob[i];
//   console.log(totalScore);
// }

// getBob();


// Matt's Code

var scores = {
  bob:[3, 2, 6, 11, 9, 2, 6, 9, 10],
  jimbo:[5, 12, 9, 22, 13, 7, 16, 10, 11],
  fish:[2, 2, 4, 5, 4, 3, 6, 4, 1]
}

var course = {
  par:[3, 4, 5, 5, 3, 3, 4, 3, 5]
}

function totalScores() {
  var players = Object.keys(scores);
  // get each player individually
  for (var p = 0; p < players.length; p++) {
    var person = players[p];
    var total = 0;

    // total each player's score
    for (var i = 0; i < scores[person].length; i++) {
      total += scores[person][i];
    }

    // compare that score against par
    var againstPar;
    if (total > course.coursePar) {
      againstPar = (total - course.coursePar) + " over par.";
    } else if (total < course.coursePar) {
      againstPar = (course.coursePar - total) + " under par.";
    } else {
      againstPar = "Equal to par."
    }
    console.log(person + " scored: " + total + ". " + againstPar);
  }
};














// Ninja Extension
// Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob
// and Jimbo played per hole calculate his winnings. 