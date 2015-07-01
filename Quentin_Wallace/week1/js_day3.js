
console.log("We're doing day 3 homework.");

var metro = { 
    alamein:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie'],
    glenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  }

// All 3 train lines intersect at Richmond, but there are NO other intersection points as trains
// run express.

// Write a JS program that takes the line + stop that a user is getting on at and the line + stop
// that user is getting off at and prints the total number of stops for the trip.

// Hints:

// Get your JS program to work for a single line before trying to tackle multiple lines. Consider
// diagramming the lines by sketching out the train lines and their stops and intersection. Make
// train lines keys in a hash, while the values are an array of all the stops on each line.

// The key to the lab is the intersection of the lines at Richmond.

// var journey = function(line1, stop1) {
//   var 
//   console.log(metro.line1.indexOf(stop1));
// }

// journey("sandringham", "Richmond");

console.log(metro.sandringham[0]);

console.log(metro.sandringham[4]);

console.log(metro.sandringham.indexOf("Richmond"));

var getStopsSandi = function(stop1, stop2) {
  // console.log(metro.sandringham.indexOf(stop1));
  // console.log(metro.sandringham.indexOf(stop2));
  var stop1Index = metro.sandringham.indexOf(stop1);
  var stop2Index = metro.sandringham.indexOf(stop2);
  for (var i = stop1Index + 1; i <= stop2Index; i++) {
    console.log(metro.sandringham[i]);
  }
}

getStopsSandi("Richmond", "Windsor");

// if line1 and line2 are ===, then just compare number of stops on the same line.
// if line1 and line2 are !==, then how many stops until Richmond, when the person can change lines.
// stops to richmond += stops from richmond

var getRichmond = function(line1) {
  console.log(metro.line1.indexOf("Richmond"));
}

// var getStops = function(line1, stop1, line2, stop2) {
//   if (line1 === line2) {
//     // Use getStopsSandi code plus work out how to sub sandringham for line1 etc
//   } else {

//   }
// }

