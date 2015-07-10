
// # GAir Conditioning

// - ambient room temperature is generally around 22 to 24 degrees 
// - determine the a/c functional, by asking the user if the A/C is functional,
// and what temperature they wish it to be.
// - If the air-conditioner is functional and the current temperature is above
// the the desired temperature... display "A/C COOLING"
// - If the air-conditioner is functional and the current temperature is below
// the the desired temperature... display "A/C HEATING"
// - If the air-conditioner is non-functional and the current temperature is
// different to the the desired temperature... display "A/C broken, call maintenance"


// #### Task
// Make new JS, HTML & CSS files and link them all up. Using the conditions above
// display various the outcomes on the HTML page. 

// Use any type of input tag to get information from the user. eg input box, drop
// down list, '+' or '-' buttons.

// #### Exrension
// Display the current temp
// Apply some fuzzy logic eg. if the desired temp is greater than 5 degrees 'TURBO MODE'
// is activated. Or make an 'ECO MODE'


window.onload = function() {

  console.log("My AC");

  var submitButton = document.getElementsByTagName("button")[0];

  var tempInput = document.getElementById("tempInput");

  var response = document.getElementById("response");

  var currentTemp = document.getElementById("currentTemp");

  var showTemp = function() {
    event.preventDefault();
    currentTemp.innerHTML = parseInt(tempInput.value) + "&deg";
    console.log(tempInput.value);
  }

  var acResponse = function() {
    event.preventDefault();
    if (tempInput.value < 22) {
      response.innerHTML = "Heating";
      console.log("Heating");
    } else if (tempInput.value > 24) {
      response.innerHTML = "Cooling";
      console.log("Cooling");
    } else {
      response.innerHTML = "Sleep";
      console.log("Idle");
    }
    //console.log("") // change to response.innerHTML = "x";
  }

  submitButton.addEventListener("click", showTemp);
  submitButton.addEventListener("click", acResponse);

}