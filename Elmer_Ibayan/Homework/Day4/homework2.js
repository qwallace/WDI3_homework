/* PT PLANNER

Melbourne Public Transport Journey Planner

There are 3 train lines:

The Alamein line has the following stops: Flinders Street, Richmond, East 
Richmond, Burnley, Hawthorn, and Glenferrie.

The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, 
Parliament, Richmond, Kooyong and Tooronga.

The Sandringham line has the following stops: Southern Cross, Richmond, 
South Yarra, Prahran, and Windsor.

All 3 train lines intersect at Richmond, but there are NO other intersection 
points as trains run express.

Write a JS program that takes the line + stop that a user is getting on at 
and the line + stop that user is getting off at and prints the total number 
of stops for the trip.

Hints:

Get your JS program to work for a single line before trying to tackle multiple 
lines. Consider diagramming the lines by sketching out the train lines and their 
stops and intersection. Make train lines keys in a hash, while the values are an 
array of all the stops on each line.

The key to the lab is the intersection of the lines at Richmond.

Non-Required Bonus:

List the stations on the journey in order of travel
Use input validation
User must enter a line and station in the subway network
If the user enters something else, your program should handle it
Add an additional lines
Allow trains to have multiple intersection points
Resources

Here's a map of the train network to help*/

// function crossPoint(mainLine){
//     switch(mainLine){
//       case "alamein":
//         return 1;
//         console.log("alamein here");
//         break;
//       case "glenWaverly":
//         return 3;
//         console.log("glenWaverly here");
//         break;
//       case "sandringham":
//         return 2;
//         console.log("sandringham here");
//         break;
//       default:
//         return 0;
//         console.log("default here");
//     }    
// }

var metro ={ 
    alamein:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie'],
    glenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  };

// TEST INPUT DATA
// Left To Right
// var currentLocation = 'Melbourne Central';
// var destination = "Kooyong";

// Right To Left
// var currentLocation  = "Kooyong"; 
// var destination = 'Melbourne Central';

// Different Line (2nd Row Left to 3rd Row Right)
//var currentLocation  = "Flagstaff";       // Richmond = 3 , Start = 0
//var destination = 'Windsor';          // Richmond = 1 , End   = 2

// Different Line (3rd Row Right to 2nd Row Left)
var currentLocation  = "Windsor";       // Richmond = 1 , Start = 4
var destination = 'Flagstaff';          // Richmond = 3 , End   = 0

//---------------------------------------------

// Finding Index Of Current Station And It's Main Line
for (var key1 in metro) {
  var startNum = (metro[key1].indexOf(currentLocation)); // determines the index of current location
  if (startNum !== -1){
    var startStationKey = key1;
    var startStationIndex = startNum;
  }  
}

//Finding Index Of End Station And It's Main Line
for (var key2 in metro) {
  var endNum = (metro[key2].indexOf(destination));
  if (endNum !== -1){
    var endStationKey = key2;
    var endStationIndex = endNum;
  }  
}

// Determine stations if it belong to the same line or not
if (startStationKey == endStationKey) {
  console.log("same line");
  sameLineTravel();

}else {
  console.log("different line");
  diffLineTravel();
}

function sameLineTravel(){
  if (startStationIndex < endStationIndex){
    // left to right
    for(var i = (startStationIndex + 1) ; i <= endStationIndex; i++){
      console.log(metro[startStationKey][i]); 
    }
  }else {
    //right to left
    for(var i = (startStationIndex - 1) ; i >= endStationIndex; i--){
      console.log(metro[endStationKey][i]); 
    }
  }
}


function diffLineTravel(){
  transferStartIndex = crossPoint(startStationKey); 
  transferEndIndex = crossPoint(endStationKey);     

  // ROUTE 1
  if (startStationIndex < transferStartIndex){
    // left to right
    for(var i = (startStationIndex + 1) ; i <= transferStartIndex; i++){
      console.log(metro[startStationKey][i]); 
    }
  }else {
    //right to left
    for(var i = (startStationIndex - 1) ; i >= transferStartIndex; i--){
      console.log(metro[startStationKey][i]); 
    }
  }

  // ROUTE 2
  if (transferEndIndex < endStationIndex){
    // left to right
    for(var i = (transferEndIndex) ; i <= endStationIndex; i++){
      console.log(metro[endStationKey][i]); 
    }
  }else {
    //right to left
    for(var i = (transferEndIndex) ; i >= endStationIndex; i--){
      console.log(metro[endStationKey][i]); 
    }
  }

}

function crossPoint(mainLine){
  switch(mainLine){
    case "alamein":
      return 1;
      break;
    case "glenWaverly":
      return 3;
      break;
    case "sandringham":
      return 2;
      break;
    default:
      return 0;
  }    
}








