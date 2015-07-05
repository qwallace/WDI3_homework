
console.log("Testing JS is working!");

// Array of train lines and stations

var metro = { 
    alamein:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie'],
    glenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  }

// Trip arrays to store one line and two line journeys

var trip1 = [];
var trip2 = [];

// Function for calculating and printing a one line journey

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

// Function for calculating and printing a two line journey

var diffLine = function(startLine, startPoint, endLine, endPoint) {
  var startIndex = metro[startLine].indexOf(startPoint);
  var endIndex = metro[endLine].indexOf(endPoint);
  var richStart = metro[startLine].indexOf("Richmond");
  var richEnd = metro[endLine].indexOf("Richmond");
  var stops = Math.abs(startIndex - richStart) + Math.abs(richEnd - endIndex);
  if (startIndex > richStart && richEnd > endIndex) { // To City - *** Fine ***
    trip1 = metro[startLine].slice(richStart, startIndex).reverse();
    trip2 = metro[endLine].slice(endIndex, richEnd).reverse();
  } else if (startIndex > richStart && richEnd < endIndex) { // To City / Away City - *** Fine ***
    trip1 = metro[startLine].slice(richStart, startIndex).reverse();
    trip2 = metro[endLine].slice(richEnd + 1, endIndex + 1);
  } else if (startIndex < richStart && richEnd > endIndex) { // Away City / To City - *** Fine ***
    trip1 = metro[startLine].slice(startIndex + 1, richStart);
    trip2 = metro[endLine].slice(endIndex, richEnd +1).reverse();
  } else { // Away City - *** Fine ***
    trip1 = metro[startLine].slice(startIndex + 1, richStart);
    trip2 = metro[endLine].slice(richEnd, endIndex + 1);
  }
  var trips = trip1.concat(trip2).join(" => ");
  console.log("You're starting at: " + startPoint);
  console.log("You're getting off at: " + endPoint);
  console.log("That's " + stops + " stops: " + trips);
}

// Function for calculating and printing all journeys

var trip = function(startLine, startPoint, endLine, endPoint) {
  if (startLine === endLine) {
    sameLine(startLine, startPoint, endPoint);
  } else {
    diffLine(startLine, startPoint, endLine, endPoint);
  }
  console.log("Have a pleasant journey!");
}

// Calling the trip function with different journey types
console.log("---- Same Line Journeys ---");
console.log("*** To City ***");
trip("alamein", "Glenferrie", "alamein", "Flinders Street");
console.log("*** Away City ***");
trip("alamein", "Flinders Street", "alamein", "Glenferrie");
console.log("--- Different Line Journeys ----");
console.log("*** To City ***");
trip("alamein", "Glenferrie", "sandringham", "Southern Cross");
console.log("*** To City / Away City ***");
trip("alamein", "Glenferrie", "sandringham", "Windsor");
console.log("*** Away City / To City ***");
trip("alamein", "Flinders Street", "sandringham", "Southern Cross");
console.log("*** Away City ***");
trip("alamein", "Flinders Street", "sandringham", "Windsor");

//  trip1 = metro[startLine].slice(startIndex + 1, richStart);
//  trip2 = metro[endLine].slice(richEnd, endIndex + 1);
