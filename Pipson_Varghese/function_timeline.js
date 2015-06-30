function timeline(){
	
	var Year = prompt("Enter a Year");
	var getYear = parseInt(Year);
		
	if(getYear === 2015 ){
	console.log("im in the present !");
	}
	else if(getYear < 2015){
	console.log("Whoa! Blast from the past!");
	}
	else {
		console.log("Greetings from the future !");
	}
   

}