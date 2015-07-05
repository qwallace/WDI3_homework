
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

// console.log(metro.sandringham[0]);

// console.log(metro.sandringham[4]);

// console.log(metro.sandringham.indexOf("Richmond"));

// var journey = function(line1, stop1, line2, stop2) { 
//   // console.log(metro.sandringham.indexOf(stop1));
//   // console.log(metro.sandringham.indexOf(stop2));
//   var stop1Index = metro[line1].indexOf(stop1);
//   var stop2Index = metro[line2].indexOf(stop2);
//   for (var i = stop1Index + 1; i <= stop2Index; i++) {
//     console.log(metro[line1][i]);
//   }
// }
 
// journey("sandringham", "Richmond", "sandringham", "Windsor");

// if (line1 === line2)

// var getRichmond = function(line1) {
//   console.log(metro[line1].indexOf("Richmond"));
// }

// getRichmond("sandringham");
// getRichmond("alamein");
// getRichmond("glenWaverly");

/////////////////////////////////////////////////////////////////////////////
// ***This might be a better approach. Once you have this up and running then work out
// how to extract the station names 
// var startLine = ''
// var startPoint = ''
// var endLine = ''
// var endPoint = ''
// var interchange = 'Richmond';
// var journey1 = startLine.indexOf(startPoint) - startLine.indexOf(interchange);
// var journey2 = endLine.indexOf(interchange) - endLine.indexOf(endPoint);
// var tripLength = Math.abs(journey1);
// var tripTotal = Math.abs(journey1) + Math.abs(journey2);
//////////////////////////////////////////////////////////////////////////////

var startLine = "sandringham";
var startPoint = "Windsor";
var endLine = "alamein";
var endPoint = "Flinders Street";

var interchange = "Richmond";

var journey1 = metro[startLine].indexOf(startPoint) - metro[startLine].indexOf(interchange);

var journey2 = metro[endLine].indexOf(interchange) - metro[endLine].indexOf(endPoint);

// console.log(metro[startLine].indexOf(startPoint) + " Start");
// console.log(metro[startLine].indexOf(interchange) + " Interchange");

// console.log(journey1);

// console.log(metro[endLine].indexOf(interchange) + " Interchange");
// console.log(metro[endLine].indexOf(endPoint) + " End");

// console.log(journey2);

var tripLength = Math.abs(journey1);
var tripTotal = Math.abs(journey1) + Math.abs(journey2);

console.log("Your journey is " + tripTotal + " stops.");

// if line1 and line2 are ===, then just compare number of stops on the same line.
// if line1 and line2 are !==, then how many stops until Richmond, when the person can change lines.
// stops to richmond += stops from richmond


// var getStops = function(line1, stop1, line2, stop2) {
//   if (line1 === line2) {
//     // Use getStopsSandi code plus work out how to sub sandringham for line1 etc
//   } else {

//   }
// }

var trip1 = [];

var sameLine = function(startLine, startPoint, endPoint) {
  var startIndex = metro[startLine].indexOf(startPoint);
  var endIndex = metro[startLine].indexOf(endPoint);
  trip1 = metro[startLine].slice(startIndex, endIndex).join(" => ");
  console.log(trip1);
}

// For reverse direction check index numbers and .reverse the array array.slice.rever.join.

sameLine("alamein", "Flinders Street", "Burnley");

// var trip = function(startLine, startPoint, endLine, endPoint) {
//   if (startLine === endLine) {
//     // code with slice
//     var stop1Index = metro[line1].indexOf(stop1);
//     var stop2Index = metro[line2].indexOf(stop2);

//   } else {
//     // get startLine stops
//     // get endLine stops
//   }
//   // console.log(stops)
// }

// var journey = function(line1, stop1, line2, stop2) { 
//   // console.log(metro.sandringham.indexOf(stop1));
//   // console.log(metro.sandringham.indexOf(stop2));
//   var stop1Index = metro[line1].indexOf(stop1);
//   var stop2Index = metro[line2].indexOf(stop2);
//   for (var i = stop1Index + 1; i <= stop2Index; i++) {
//     console.log(metro[line1][i]);
//   }
// }

// *** for 2 trips check to see if reverse by comparing index number to index of richmond.