
console.log("We're doing PT Planner.");

var metro = { 
    alamein:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie'],
    glenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  }

var trip1 = [];
var trip2 = [];

var sameLine = function(startLine, startPoint, endPoint) {
  var startIndex = metro[startLine].indexOf(startPoint);
  var endIndex = metro[startLine].indexOf(endPoint);
  var stops = Math.abs(startIndex - endIndex);
  if (startIndex > endIndex) {
    trip1 = metro[startLine].slice(endIndex, startIndex).reverse().join(" => ");
  } else {
    trip1 = metro[startLine].slice(startIndex + 1, endIndex + 1).join(" => ");
  }
  console.log("You're starting at: " + startPoint);
  console.log("You're getting off at: " + endPoint);
  console.log("That's " + stops + " stops: " + trip1);
}

var diffLine = function(startLine, startPoint, endLine, endPoint) {
  var startIndex = metro[startLine].indexOf(startPoint);
  var endIndex = metro[endLine].indexOf(endPoint);
  var richStart = metro[startLine].indexOf("Richmond");
  var richEnd = metro[endLine].indexOf("Richmond");
  var stops = Math.abs(startIndex - richStart) + Math.abs(richEnd - endIndex);
  trip1 = metro[startLine].slice(startIndex + 1, richStart);
  trip2 = metro[endLine].slice(richEnd, endIndex + 1);
  var trips = trip1.concat(trip2).join(" => ");
  console.log("You're starting at: " + startPoint);
  console.log("You're getting off at: " + endPoint);
  console.log("That's " + stops + " stops: " + trips);
}

var reverseArrayDiff = function(startLine, startIndex, richStart, endLine, richEnd, endIndex) {
  trip1 = metro[startLine].slice(richStart + 1, startIndex).reverse();
  trip2 = metro[endLine].slice(endIndex, richEnd + 1).reverse();
  var tripsReverse = trip1.concat(trip2).join(" => ");
  console.log("This is the reverse for a different line: " + tripsReverse);
}

reverseArrayDiff("alamein", 5, 1, "glenWaverly", 3, 0);

// for reverse on diffLine

// if (startIndex > richStart && richEnd > endIndex)
// else if (startIndex > richStart)
// else if (richEnd > endIndex)
// else

  if (startIndex > richStart && richEnd > endIndex) {
    trip1 = metro[startLine].slice(richStart, startIndex).reverse();
    trip2 = metro[endLine].slice(endIndex, richEnd + 1).reverse();
  } else if (startIndex > richStart) {
    trip1 = metro[startLine].slice(richStart, startIndex).reverse();
    trip2 = metro[endLine].slice(richEnd + 1, endIndex + 1).reverse();
  } else if (richEnd > endIndex) {
    trip1 = metro[startLine].slice(startIndex + 1, richStart).reverse();
    trip2 = metro[endLine].slice(endIndex, richEnd +1).reverse();
  } else {
    trip1 = metro[startLine].slice(startIndex + 1, richStart);
    trip2 = metro[endLine].slice(richEnd, endIndex + 1);
  }


// reverse both


// revers trip1


// revers trip2


// normal diffLine code

// for reverse on sameLine

// if endIndex < startIndex

// reverseArraySame

// var reverseArraySame = function(startLine, startIndex, endIndex) {
//   tripReverse = metro[startLine].slice(startIndex + 1, endIndex + 1).reverse().join(" => "); 

//   console.log("This is the reverse for same line: " + tripReverse);
// }

// reverseArraySame("alamein", 0, 4);





// console.log(metro["sandringham"].indexOf("Prahran"));

// For reverse direction check index numbers and .reverse the array array.slice.rever.join.

//sameLine("alamein", "Flinders Street", "Burnley");

var trip = function(startLine, startPoint, endLine, endPoint) {
  if (startLine === endLine) {
    sameLine(startLine, startPoint, endPoint);
  } else {
    // diffLine(startLine, startPoint, endLine, endPoint);
    diffLine(startLine, startPoint, endLine, endPoint);
    // get endLine stops
  }
  console.log("Have a pleasant journey!");
}

trip("alamein", "Flinders Street", "alamein", "Burnley");

trip("glenWaverly", "Flagstaff", "sandringham", "Windsor");

console.log("Here is the reverse on same:");

trip("alamein", "Glenferrie", "alamein", "Flinders Street");
